var Permission = require('../models/database/PermissionModel');
var PackageList = require('../models/parameters/PackageList');
var BasicScanResult = require('../models/results/BasicScanResult');
var async = require('async');

/**
 * Retrieve and send Permission global list
 * @param req
 * @param res
 */
exports.permission_list = function (req, res) {

    Permission.find({}, {_id: 0})
        .exec(function (err, list_permissions) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            res.send(list_permissions);
        });

};


/**
 * Scan all the received package according to their permissions
 * @param req
 * @param res
 */
exports.permission_basic_scan = function (req, res) {
    var packageList = new PackageList(req.body);
    var basicScanResult = new BasicScanResult;
    basicScanResult.status = 200;

    //Scan asynchronously all the packages
    async.forEach(packageList.Packages, function (package, callbackPackageList) {

        var deprecatedPermissionsNumber = 0;
        var financialImpactPermissionsNumber = 0;
        var privacyImpactPermissionsNumber = 0;
        var systemImpactPermissionsNumber = 0;
        var batteryImpactPermissionsNumber = 0;
        var locationImpactPermissionsNumber = 0;
        var permissionLevelNoProtection = 0;
        var permissionLevelNormal = 0;
        var permissionLevelDangerous = 0;
        var permissionLevelSignature = 0;
        var permissionLevelSystemOrSignature = 0;
        var permissionLevelSystem = 0;
        var permissionLevelSignatureOrPrivileged = 0;
        var permissionLevelNoThirdParty = 0;

        //Scan asynchronously all the permission of a package
        async.forEach(package.Permissions, function (permission, callbackPermissionList) {
            async.parallel({
                //Check if the permission is deprecated
                permission_deprecated: function (callback) {
                    Permission.count({permission_name: permission, is_deprecated: true}, callback);
                },
                //Check if the permission has a financial impact
                permission_financial_impact: function (callback) {
                    Permission.count({permission_name: permission, financial_impact: true}, callback);
                },
                //Check if the permission has a privacy impact
                permission_privacy_impact: function (callback) {
                    Permission.count({permission_name: permission, privacy_impact: true}, callback);
                },
                //Check if the permission has a system impact
                permission_system_impact: function (callback) {
                    Permission.count({permission_name: permission, system_impact: true}, callback);
                },
                //Check if the permission has a battery impact
                permission_battery_impact: function (callback) {
                    Permission.count({permission_name: permission, battery_impact: true}, callback);
                },
                //Check if the permission has a location impact
                permission_location_impact: function (callback) {
                    Permission.count({permission_name: permission, location_impact: true}, callback);
                },
                //Check if the permission has a location impact
                permission_level_noprotection: function (callback) {
                    Permission.count({permission_name: permission, permission_level: "NoProtection"}, callback);
                },//Check if the permission has a location impact
                permission_level_normal: function (callback) {
                    Permission.count({permission_name: permission, permission_level: "Normal"}, callback);
                },//Check if the permission has a location impact
                permission_level_dangerous: function (callback) {
                    Permission.count({permission_name: permission, permission_level: "Dangerous"}, callback);
                },//Check if the permission has a location impact
                permission_level_signature: function (callback) {
                    Permission.count({permission_name: permission, permission_level: "Signature"}, callback);
                }, //Check if the permission has a location impact
                permission_level_systemorsignature: function (callback) {
                    Permission.count({permission_name: permission, permission_level: "SystemOrSignature"}, callback);
                },//Check if the permission has a location impact
                permission_level_system: function (callback) {
                    Permission.count({permission_name: permission, permission_level: "System"}, callback);
                },//Check if the permission has a location impact
                permission_level_signatureorprivileged: function (callback) {
                    Permission.count({permission_name: permission, permission_level: "SignatureOrPrivileged"}, callback);
                },//Check if the permission has a location impact
                permission_level_nothirdparty: function (callback) {
                    Permission.count({permission_name: permission, permission_level: "NoThirdParty"}, callback);
                },
            }, function (err, results) {
                //Increment all the counter according to the result for the current permission
                deprecatedPermissionsNumber += results.permission_deprecated;
                financialImpactPermissionsNumber += results.permission_financial_impact;
                privacyImpactPermissionsNumber += results.permission_privacy_impact;
                systemImpactPermissionsNumber += results.permission_system_impact;
                batteryImpactPermissionsNumber += results.permission_battery_impact;
                locationImpactPermissionsNumber += results.permission_location_impact;
                permissionLevelNoProtection += results.permission_level_noprotection;
                permissionLevelNormal += results.permission_level_normal;
                permissionLevelDangerous += results.permission_level_dangerous;
                permissionLevelSignature += results.permission_level_signature;
                permissionLevelSystemOrSignature += results.permission_level_systemorsignature;
                permissionLevelSystem += results.permission_level_system;
                permissionLevelSignatureOrPrivileged += results.permission_level_signatureorprivileged;
                permissionLevelNoThirdParty += results.permission_level_nothirdparty;
                callbackPermissionList();
            })
        }, function (err) {
            //Arrived here if all the permissions have been checked and set up the current response element related
            //to this package
            var data = {
                PackageName: package.PackageName,
                DeprecatedPermissionsNumber: deprecatedPermissionsNumber,
                FinancialImpactPermissionsNumber: financialImpactPermissionsNumber,
                PrivacyImpactPermissionsNumber: privacyImpactPermissionsNumber,
                SystemImpactPermissionsNumber: systemImpactPermissionsNumber,
                BatteryImpactPermissionsNumber: batteryImpactPermissionsNumber,
                LocationImpactPermissionsNumber: locationImpactPermissionsNumber,
                PermissionLevelNoProtection: permissionLevelNoProtection,
                PermissionLevelNormal: permissionLevelNormal,
                PermissionLevelDangerous: permissionLevelDangerous,
                PermissionLevelSignature:permissionLevelSignature,
                PermissionLevelSystemOrSignature: permissionLevelSystemOrSignature,
                PermissionLevelSystem: permissionLevelSystemOrSignature,
                PermissionLevelSignatureOrPrivileged: permissionLevelSignatureOrPrivileged,
                PermissionLevelNoThirdParty: permissionLevelNoThirdParty,

            };
            basicScanResult.result.push(data);
            callbackPackageList();
        });


    }, function (err) {
        //The result is sent when all the packages has been checked
        res.json(basicScanResult);
    });


};
var DeveloperSignature = require('../models/database/DeveloperSignatureModel');
var DeveloperSignatureList = require('../models/parameters/DeveloperSignatureList');
var DeveloperSignatureScanResult = require('../models/results/DeveloperSignatureScanResult');
var async = require('async');

/**
 * Retrieve and send BlacklistedDeveloperSignature global list
 * @param req
 * @param res
 */
exports.blacklisted_developer_signature_list = function (req, res) {

    DeveloperSignature.find({}, {_id: 0})
        .exec(function (err, list_signatures) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            res.send(list_signatures);
        });

};

/**
 * Blacklist a developer signature
 * @param req
 * @param res
 */
exports.blacklist_developer_signature = function (req, res) {
    var developer_signature = new DeveloperSignature(req.body)
    developer_signature.save(function (err) {
        if (err) res.send(err);
        // saved!
    });
    res.send("OK");



};


/**
 * Scan all the received package according to their signature
 * @param req
 * @param res
 */
exports.developer_signature_scan = function (req, res) {
    var developerSignatureList = new DeveloperSignatureList(req.body);
    var developerSignatureScanResult = new DeveloperSignatureScanResult;
    developerSignatureScanResult.status = 200;

    //Scan asynchronously all the packages
    async.forEach(developerSignatureList.DeveloperSignatures, function (developerSignatures,callbackPackageList) {
            DeveloperSignature.count({
                key_algorithm: developerSignatures.KeyAlgorithm,
                key_base64: developerSignatures.KeyBase64
            },function (err, count) {
                var data;
                if (count > 0) {
                    data = {
                        PackageName: developerSignatures.PackageName,
                        IsBlacklisted: true
                    };
                } else {
                    data = {
                        PackageName: developerSignatures.PackageName,
                        IsBlacklisted: false
                    };
                }

                developerSignatureScanResult.result.push(data);
        });
            callbackPackageList();
    }, function (err) {
        //The result is sent when all the packages has been checked
        res.json(developerSignatureScanResult);
    });


};
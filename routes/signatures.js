var express = require('express');
var router = express.Router();

var permission_controller = require('../controllers/permissionController');

/**
 * @apiDefine PermissionsListResults
 * @apiSuccess {String} permission_name Permission name
 * @apiSuccess {String} permission_level Permission level
 * @apiSuccess {Boolean} is_deprecated Permission state
 * @apiSuccess {Boolean} financial_impact Permission has an impact on financial aspect
 * @apiSuccess {Boolean} privacy_impact Permission has an impact on privacy aspect
 * @apiSuccess {Boolean} system_impact Permission has an impact on system aspect
 * @apiSuccess {Boolean} battery_impact Permission has an impact on battery aspect
 * @apiSuccess {Boolean} location_impact Permission accesses information about location
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {"permission_name":"string_1",
 *          "permission_level":"string_2",
 *          "is_deprecated":false,
 *          "financial_impact":false,
 *          "privacy_impact":false,
 *          "system_impact":false,
 *          "battery_impact":false,
 *          "location_impact":false}
 */


/**
 * @apiDefine BasicScanResult
 * @apiParam {Object[]} Packages
 * @apiParam {String} Packages.AppName Application Name
 * @apiParam {String} Packages.PackageName PackageName
 * @apiParam {Number} Packages.VersionCode Actual version code
 * @apiParam {String} Packages.VersionName Actual version name
 * @apiParam {Number} Packages.FirstInstallTime First install date
 * @apiParam {Number} Packages.LastUpdateTime Last update date
 * @apiParam {String[]} Packages.Permissions Permissions'list
 * @apiParamExample {json} Request-Example:
 *     {"Packages": [
 *          {
 *               "AppName":"string_0",
 *               "PackageName": "string_1",
 *               "VersionCode": 0,
 *               "VersionName": "string_2",
 *               "FirstInstallTime": 0,
 *               "LastUpdateTime":0,
 *               "Permissions": ["string_3", "string_4"]
 *           },
 *      {
 *               "AppName": "string_5",
 *               "PackageName": "string_6",
 *               "VersionCode": 0,
 *               "VersionName": "string_7",
 *               "FirstInstallTime": 0,
 *               "LastUpdateTime":0,
 *               "Permissions": ["string_8","string_9"]
 *           }
 *       ]
 *   }
 * @apiSuccess {Number} status Status
 * @apiSuccess {Object[]} result
 * @apiSuccess {String} result.AppName Application Name
 * @apiSuccess {Number} result.DeprecatedPermissionsNumber Number of Deprecated Permissions
 * @apiSuccess {Number} result.FinancialImpactPermissionsNumber Number of Permissions with a financial impact
 * @apiSuccess {Number} result.PrivacyImpactPermissionsNumber Number of Permissions with a privacy impact
 * @apiSuccess {Number} result.SystemImpactPermissionsNumber Number of Permissions with a system impact
 * @apiSuccess {Number} result.BatteryImpactPermissionsNumber Number of Permissions with a battery impact
 * @apiSuccess {Number} result.LocationImpactPermissionsNumber Number of Permissions with a location impact
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {"status":200,
 *          "result":[
 *                  {"AppName":"string_0",
 *                  "DeprecatedPermissionsNumber":0,
 *                  "FinancialImpactPermissionsNumber":0,
 *                  "PrivacyImpactPermissionsNumber":0,
 *                  "SystemImpactPermissionsNumber":0,
 *                  "BatteryImpactPermissionsNumber":0,
 *                  "LocationImpactPermissionsNumber":0
 *                  },
 *                  {"AppName":"string_1",
 *                  "DeprecatedPermissionsNumber":0,
 *                  "FinancialImpactPermissionsNumber":0,
 *                  "PrivacyImpactPermissionsNumber":0,
 *                  "SystemImpactPermissionsNumber":0,
 *                  "BatteryImpactPermissionsNumber":0,
 *                  "LocationImpactPermissionsNumber":0}
 *                  ]}
 * @apiError {Number} status ErrorStatus
 * @apiError {String} error Verbose error
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 0,
 *       "error": "string_error"
 *     }
 */


/**
 * @api {get} /api/permissions/ List all permissions and their repartition
 * @apiGroup Permissions
 * @apiUse PermissionsListResults
 */
router.get('/', permission_controller.permission_list);

/**
 * @api {post} /api/permissions/basicscan Make the Basic Scan of all the sent packages
 * @apiGroup Permissions
 * @apiUse BasicScanResult
 */
router.post('/basicscan', permission_controller.permission_basic_scan);


module.exports = router;

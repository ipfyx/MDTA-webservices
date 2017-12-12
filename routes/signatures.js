var express = require('express');
var router = express.Router();

var signature_controller = require('../controllers/signatureController');

/**
 * @apiDefine BlacklistedDeveloperSignatureListResults
 * @apiSuccess {String} package_name Package name
 * @apiSuccess {String} key_algorithm Key Algorithm
 * @apiSuccess {String} key_base64 Key Base64
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {"package_name":"string_1",
 *          "key_algorithm":"string_2",
 *          "key_base64":"string_3"}
 */

/**
 * @apiDefine NewDeveloperSignature
 * @apiParam {String} package_name Package name
 * @apiParam {String} key_algorithm Key Algorithm
 * @apiParam {String} key_base64 Key Base64
 * @apiParamExample {json} Request-Example:
 *    {"package_name":"string_1",
 *          "key_algorithm":"string_2",
 *          "key_base64":"string_3"}
 */

/**
 * @apiDefine DeveloperSignatureScanResult
 * @apiParam {Object[]} DeveloperSignatures
 * @apiParam {String} DeveloperSignatures.PackageName Package Name
 * @apiParam {String} DeveloperSignatures.KeyAlgorithm Key Algorithm
 * @apiParam {String} DeveloperSignatures.KeyBase64 Key Base64
 * @apiParamExample {json} Request-Example:
 *     {"DeveloperSignatures": [
 *          {
 *               "PackageName":"string_0",
 *               "KeyAlgorithm": "string_1",
 *               "KeyBase64": "string_2",
 *           },
 *      {
 *               "PackageName": "string_3",
 *               "KeyAlgorithm": "string_4",
 *               "KeyBase64": "string_5",
 *           }
 *       ]
 *   }
 * @apiSuccess {Number} status Status
 * @apiSuccess {Object[]} result
 * @apiSuccess {String} result.PackageName Package Name
 * @apiSuccess {Boolean} result.IsBlacklisted Result
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {"status":200,
 *          "result":[
 *                  {"PackageName":"string_0",
 *                  "IsBlacklisted":true,
 *                  },
 *                  {"PackageName":"string_1",
 *                  "IsBlacklisted":true,
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
 * @api {get} /api/signatures/ List all blacklisted signatures and their repartition
 * @apiGroup Signatures
 * @apiUse BlacklistedDeveloperSignatureListResults
 */
router.get('/', signature_controller.blacklisted_developer_signature_list);

/**
 * @api {post} /api/signatures/developersignaturescan Make the Basic Scan of all the sent packages
 * @apiGroup Signatures
 * @apiUse DeveloperSignatureScanResult
 */
router.post('/developersignaturescan', signature_controller.developer_signature_scan);

/**
 * @api {post} /api/signatures/blacklist Make the Basic Scan of all the sent packages
 * @apiGroup Signatures
 * @apiUse NewDeveloperSignature
 */
router.post('/blacklist', signature_controller.blacklist_developer_signature);


module.exports = router;

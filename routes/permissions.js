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
 * @apiSuccessExample {json} Success
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
 * @api {get} /api/permissions/ List all permissions and their repartition
 * @apiGroup Permissions
 * @apiUse PermissionsListResults
 */
router.get('/', permission_controller.permission_list);


module.exports = router;

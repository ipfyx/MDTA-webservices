var express = require('express');
var router = express.Router();

var permission_controller = require('../controllers/permissionController');


/* GET permissions listing. */
router.get('/', permission_controller.permission_list);


module.exports = router;

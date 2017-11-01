var Permission = require('../models/database/PermissionModel');

/**
 * Retrieve and send Permission global list
 * @param req
 * @param res
 */
exports.permission_list = function (req, res) {

    Permission.find({},{_id:0})
        .exec(function (err, list_permissions) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            res.send(list_permissions);
        });

};



var Permission = require('../models/PermissionModel');


exports.permission_list = function (req, res) {

    Permission.find()
        .exec(function (err, list_permissions) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            res.send(list_permissions);
        });

};


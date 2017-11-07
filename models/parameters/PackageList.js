var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PackageListSchema = Schema(
    {
        Packages: [
            {
                AppName: {type: String,required: true},
                PackageName: {type: String},
                VersionCode: {type: Number},
                VersionName: {type: String},
                FirstInstallTime: {type: Number},
                LastUpdateTime: {type: Number},
                Permissions: [
                   String
                ]
            }
        ]
    }
    )
;


//Export model
module.exports = mongoose.model('PackageList', PackageListSchema);
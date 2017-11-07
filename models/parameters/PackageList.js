var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PackagesListSchema = Schema(
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
module.exports = mongoose.model('PackagesList', PackagesListSchema);
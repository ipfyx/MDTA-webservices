var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BasicScanResultSchema = Schema(
    {
        status: {type: Number, required: true},
        error: {type: String},
        result: [
            {
                AppName: {type: String},
                DeprecatedPermissionsNumber: {type: Number},
                FinancialImpactPermissionsNumber: {type: Number},
                PrivacyImpactPermissionsNumber: {type: Number},
                SystemImpactPermissionsNumber: {type: Number},
                BatteryImpactPermissionsNumber: {type: Number},
                LocationImpactPermissionsNumber: {type: Number},
            }
        ]
    }
    )
;


//Export model
module.exports = mongoose.model('BasicScanResult', BasicScanResultSchema);
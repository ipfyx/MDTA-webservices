var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BasicScanResultSchema = Schema(
    {
        status: {type: Number, required: true},
        error: {type: String},
        result: [
            {
                PackageName: {type: String},
                DeprecatedPermissionsNumber: {type: Number},
                FinancialImpactPermissionsNumber: {type: Number},
                PrivacyImpactPermissionsNumber: {type: Number},
                SystemImpactPermissionsNumber: {type: Number},
                BatteryImpactPermissionsNumber: {type: Number},
                LocationImpactPermissionsNumber: {type: Number},
                PermissionLevelNoProtection: {type: Number},
                PermissionLevelNormal: {type: Number},
                PermissionLevelDangerous: {type: Number},
                PermissionLevelSignature: {type: Number},
                PermissionLevelSystemOrSignature: {type: Number},
                PermissionLevelSystem: {type: Number},
                PermissionLevelSignatureOrPrivileged: {type: Number},
                PermissionLevelNoThirdParty: {type: Number},
            }
        ]
    }
    )
;


//Export model
module.exports = mongoose.model('BasicScanResult', BasicScanResultSchema);
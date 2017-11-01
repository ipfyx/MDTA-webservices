var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PermissionSchema = Schema(
    {
        permission_name: {type: String, required: true, max: 100},
        permission_level: {
            type: String,
            enum: ['No Protection', 'Normal', 'Dangerous', 'Signature', 'System|Signature', 'System', 'Signature|Privileged','No ThirdParty'],
            required: true
        },
        is_deprecated: {type: Boolean, required: true},
        financial_impact: {type: Boolean, required: true},
        privacy_impact: {type: Boolean, required: true},
        system_impact: {type: Boolean, required: true},
        battery_impact: {type: Boolean, required: true},
        location_impact: {type: Boolean, required: true},
    }
);


//Export model
module.exports = mongoose.model('Permission', PermissionSchema);
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DeveloperSignatureListSchema = Schema(
    {
        DeveloperSignatures: [
            {
                PackageName: {type: String},
                KeyAlgorithm: {type: String},
                KeyBase64: {type: String}
            }
        ]
    }
    )
;


//Export model
module.exports = mongoose.model('DeveloperSignatureList', DeveloperSignatureListSchema);
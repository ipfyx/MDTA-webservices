var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CertificateSignatureListSchema = Schema(
    {
        CertificateSignatures: [
            {
                PackageName: {type: String},
                SigAlgorithm: {type: String},
                SigBase64: {type: String}
            }
        ]
    }
    )
;


//Export model
module.exports = mongoose.model('CertificateSignatureList', CertificateSignatureListSchema);
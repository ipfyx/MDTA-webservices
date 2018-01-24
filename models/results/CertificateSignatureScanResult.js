var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CertificateSignatureScanResultSchema = Schema(
    {
        status: {type: Number, required: true},
        error: {type: String},
        result: [
            {
                PackageName: {type: String},
                IsBlacklisted: {type: Boolean}
            }
        ]
    }
    )
;


//Export model
module.exports = mongoose.model('CertificateSignatureScanResult', CertificateSignatureScanResultSchema);
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CertificateSignatureSchema = Schema(
    {
        package_name: {type: String, required: true, max: 100},
        sig_algorithm: {type: String, required: true, max: 30},
        sig_base64: {type: String, required: true},
    }
);


//Export model
module.exports = mongoose.model('CertificateSignature', CertificateSignatureSchema);
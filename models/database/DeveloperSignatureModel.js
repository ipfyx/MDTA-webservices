var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DeveloperSignatureSchema = Schema(
    {
        package_name: {type: String, required: true, max: 100},
        key_algorithm: {type: String, required: true, max:30},
        key_base64: {type: String, required: true},
    }
);


//Export model
module.exports = mongoose.model('DeveloperSignature', DeveloperSignatureSchema);
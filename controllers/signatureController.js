var DeveloperSignature = require('../models/database/DeveloperSignatureModel');
var DeveloperSignatureList = require('../models/parameters/DeveloperSignatureList');
var DeveloperSignatureScanResult = require('../models/results/DeveloperSignatureScanResult');
var CertificateSignature = require('../models/database/CertificateSignatureModel');
var CertificateSignatureList = require('../models/parameters/CertificateSignatureList');
var CertificateSignatureScanResult = require('../models/results/CertificateSignatureScanResult');
var async = require('async');

/**
 * Retrieve and send BlacklistedDeveloperSignature global list
 * @param req
 * @param res
 */
exports.blacklisted_developer_signature_list = function (req, res) {

    DeveloperSignature.find({}, {_id: 0})
        .exec(function (err, list_signatures) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            res.send(list_signatures);
        });

};

/**
 * Blacklist a developer signature
 * @param req
 * @param res
 */
exports.blacklist_developer_signature = function (req, res) {
    var developer_signature = new DeveloperSignature(req.body)
    developer_signature.save(function (err) {
        if (err) res.send(err);
        // saved!
    });
    res.send("OK");



};

/**
 * Blacklist a developer certificate
 * @param req
 * @param res
 */
exports.blacklist_developer_certificate = function (req, res) {
    var developer_signature = new CertificateSignature(req.body)
    developer_signature.save(function (err) {
        if (err) res.send(err);
        // saved!
    });
    res.send("OK");


};


/**
 * Scan all the received package according to their app developper signature
 * @param req
 * @param res
 */
exports.developer_signature_scan = function (req, res) {
    var developerSignatureList = new DeveloperSignatureList(req.body);
    var developerSignatureScanResult = new DeveloperSignatureScanResult;
    developerSignatureScanResult.status = 200;

    //Scan asynchronously all the packages
    async.forEach(developerSignatureList.DeveloperSignatures, function (developerSignatures,callbackPackageList) {
        console.log(developerSignatures)   ;
        DeveloperSignature.count({
                key_algorithm: developerSignatures.KeyAlgorithm,
                key_base64: developerSignatures.KeyBase64
            },function (err, count) {
                var data;
                if (count > 0) {
                    data = {
                        PackageName: developerSignatures.PackageName,
                        IsBlacklisted: true
                    };
                } else {
                    data = {
                        PackageName: developerSignatures.PackageName,
                        IsBlacklisted: false
                    };
                }

                developerSignatureScanResult.result.push(data);
            callbackPackageList();
        });

    }, function (err) {
        //The result is sent when all the packages has been checked
        res.json(developerSignatureScanResult);
    });


};


/**
 * Scan all the received package according to their certificate signature
 * @param req
 * @param res
 */
exports.certificate_signature_scan = function (req, res) {
    var certificateSignatureList = new CertificateSignatureList(req.body);
    var certificateSignatureScanResult = new CertificateSignatureScanResult;
    certificateSignatureScanResult.status = 200;

    //Scan asynchronously all the packages
    async.forEach(certificateSignatureList.CertificateSignatures, function (certificateSignatures, callbackPackageList) {
        CertificateSignature.count({
            sig_algorithm: certificateSignatures.SigAlgorithm,
            sig_base64: certificateSignatures.SigBase64
        }, function (err, count) {
            var data;
            if (count > 0) {
                data = {
                    PackageName: certificateSignatures.PackageName,
                    IsBlacklisted: true
                };
            } else {
                data = {
                    PackageName: certificateSignatures.PackageName,
                    IsBlacklisted: false
                };
            }

            certificateSignatureScanResult.result.push(data);
            callbackPackageList();
        });

    }, function (err) {
        //The result is sent when all the packages has been checked
        res.json(certificateSignatureScanResult);
    });


};
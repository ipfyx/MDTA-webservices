var express = require('express');
var router = express();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('/apidoc/')
});


module.exports = router;

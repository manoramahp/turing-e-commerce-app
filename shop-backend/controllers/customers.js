var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json({"customers" : "success"});
});

module.exports = router;
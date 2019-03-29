var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json({"departments": "success"});
});

router.get('/:id', function(req, res) {
    let departmentName  = req.params.id;
    res.json({"department" : departmentName});
});

module.exports = router;
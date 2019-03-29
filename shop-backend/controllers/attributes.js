var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json({"attributes" : "success"});
});

router.get('/:attribute_id', function(req, res) {
    let attributeId = req.params.attribute_id;
    res.json({"attribute" : attributeId});
});

router.get('/values/:attribute_id', function(req, res) {
    let attributeId = req.params.attribute_id;
    res.json({"attribute_values" : attributeId});
});

router.get('/inProduct/:product_id', function(req, res) {
    let productId = req.params.product_id;
    res.json({"attribute_inproduct" : productId});
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send({"orders" : "success"});
});

router.get('/:order_id', function(req, res) {
    let orderId = req.params.order_id;
    res.json({"order" : orderId});
});

module.exports = router; 
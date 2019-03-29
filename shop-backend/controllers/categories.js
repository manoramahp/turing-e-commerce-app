var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json({"categories" : "success"});
});

router.get('/:category_id', function(req, res) {
    let category = req.params.category_id;
    res.json({"category" : category});
});

router.get('/inProduct/:product_id', function(req, res) {
    let productId = req.params.product_id;
    res.json({ categories_inProduct_id : productId });
});

router.get('/inDepartment/:department_id', function(req, res) {
    let departmentId = req.params.department_id;
    res.json({ categories_inDepartment_id : departmentId });
});

module.exports = router;
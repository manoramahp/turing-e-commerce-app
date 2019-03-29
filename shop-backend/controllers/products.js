var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json({"products" : "success"});
});

router.get('/search', function(req, res) {
    let searchString = req.query.query_string;
    res.json({"product_search" : searchString});
});

router.get('/:product_id', function(req, res){
    let productId = req.params.product_id;
    res.json({"product": productId});
});

router.get('/inCategory/:category_id', function(req, res) {
    let categoryId = req.params.category_id;
    res.json({"products_inCategory" : categoryId});
});

router.get('/inDepartment/:department_id', function(req, res) {
    let departmentId = req.params.department_id;
    res.json({"products_inDepartment": departmentId});
});

router.get('/:product_id/details', function(req, res) {
    let productId = req.params.product_id;
    res.json({"product_details" : productId + " details"});
});

router.get('/:product_id/locations', function(req, res) {
    let productId = req.params.product_id;
    res.json({"product_locations:": productId + " location"});
});

router.get('/:product_id/reviews', function(req, res) {
    let productId = req.params.product_id;
    res.json({"product_reviews" : productId + " reviews"})
});

module.exports = router;
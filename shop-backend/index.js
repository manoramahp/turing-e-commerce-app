var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var departmentsCtrl = require('./controllers/departments');
var categoriesCtrl = require('./controllers/categories');
var attributesCtrl = require('./controllers/attributes');
var productsCtrl = require('./controllers/products');
var customersCtrl = require('./controllers/customers');
var orderCtrl = require('./controllers/orders');

var app = express();
app.use(express.json());
app.use('/departments', departmentsCtrl);
app.use('/categories', categoriesCtrl);
app.use('/attributes', attributesCtrl);
app.use('/products', productsCtrl);
app.use('/customers', customersCtrl);
app.use('/orders', orderCtrl);

app.listen(3001);
const express = require('express');
const router = express.Router();

const {getAllProducts, getProductById} = require('../controller/productControllers');
const {getOrders} =  require('../controller/paymentController');

router.post('/order', getOrders)

//GET all products from db
//GET /api/products routes
router.get('/', getAllProducts);


//GET a products by id from db
//GET /api/products/:id routes
router.get('/:id', getProductById);


module.exports = router;
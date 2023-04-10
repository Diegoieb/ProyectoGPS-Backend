'use strict'
const express = require('express');
const productController = require('../controller/product.controller.js');
const router = express.Router();
router.get('/product',productController.getProduct);
router.post('/product',productController.insertProduct);
router.put('/product/:_id',productController.updateProduct);
router.delete('/product/:_id',productController.deleteProduct);
router.get('/product/:_id',productController.searchProductById);
module.exports=router;
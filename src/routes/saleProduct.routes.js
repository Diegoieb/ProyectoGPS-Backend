'use strict'
const express = require('express');
const saleProductController = require('../controller/saleProduct.controller.js');
const router = express.Router();
router.get('/saleProduct',saleProductController.getSaleProduct);
router.post('/saleProduct',saleProductController.insertSaleProduct);
router.put('/saleProduct/:_id',saleProductController.updateSaleProduct);
router.delete('/saleProduct/:_id',saleProductController.deleteSaleProduct);
router.get('/saleProduct/:_id',saleProductController.getSaleProduct);
module.exports=router;
'use strict'
const express = require('express');
const saleController = require('../controller/sale.controller.js');
const router = express.Router();
router.get('/sale',saleController.getSale);
router.post('/sale',saleController.insertSale);
router.put('/sale/:_id',saleController.updateSale);
router.delete('/sale/:_id',saleController.deleteSale);
router.get('/sale/:_id',saleController.getSale);
module.exports=router;
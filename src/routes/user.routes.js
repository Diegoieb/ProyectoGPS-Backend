'use strict'
const express = require('express');
const userController = require('../controller/user.controller.js');
const router = express.Router();
router.get('/user',userController.getUser);
router.post('/user',userController.insertUser);
router.put('/user/:_id',userController.updateUser);
router.delete('/user/:_id',userController.deleteUser);
router.get('/user/:_id',userController.getUser);
module.exports=router;
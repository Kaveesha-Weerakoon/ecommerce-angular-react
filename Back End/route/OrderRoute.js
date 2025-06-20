const express=require('express');
const OrderController=require('../controller/OrderController');

const router=express.Router();

router.post('/save',OrderController.order);

module.exports=router;
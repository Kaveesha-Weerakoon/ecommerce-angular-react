const mongoose=require('mongoose');
const OrderSchema=new mongoose.Schema({
    itemcode:{type:String,required:true },
    Qty:{type:String,required:true },
    total:{type:Number,required:true },
    customername:{type:String,required:true },
    customeraddress:{type:String,required:true }
});
module.exports = mongoose.model('Order',OrderSchema)
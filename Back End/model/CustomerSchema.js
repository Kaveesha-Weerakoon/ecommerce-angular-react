const mongoose=require('mongoose');
const CustomerSchema = new mongoose.Schema({
    customername:{type:"string",require:true},
    Email:{type:"string",require:true},
    customeraddress:{type:"string",require:true},
    contactnumber:{type:"string",require:true},
    password:{type:"string",require:true}
});
module.exports=mongoose.model('Customer',CustomerSchema);
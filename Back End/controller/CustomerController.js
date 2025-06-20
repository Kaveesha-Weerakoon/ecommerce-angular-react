const Customer=require('../model/CustomerSchema')

const saveCustomer=(req,resp)=>{
    const customerDto=new Customer({
        customername:req.body.customername,
        Email:req.body.Email,
        customeraddress:req.body.customeraddress,
        contactnumber:req.body.contactnumber,
        password:req.body.password
    })
    customerDto.save().then(response=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(201).json(error);
        });
}

module.exports={
    saveCustomer
}

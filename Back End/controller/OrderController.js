const Order=require('../model/OrderSchema')

const order=(req,resp)=>{
    const OrderDto=new Order({
        itemcode:req.body.itemcode,
        Qty:req.body.Qty,
        total:req.body.total,
        customername:req.body.customername,
        customeraddress:req.body.customeraddress
    })
    OrderDto.save().then(response=>{
         resp.status(201).json(result);
    }).catch(error=>{
        resp.status(201).json(error);
    });
}

module.exports={
    order
}

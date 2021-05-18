const router = require("express").Router();
const {json} = require("body-parser");
let OrderItems = require("../models/OrderItems");

//add orderItems
router.route("/add").post((req,res)=>{

    const order_no = Number(req.body.order_no);
    const item_id = Number(req.body.item_id);
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);
    const date = Date(req.body.date);


    const newOrderItems = new OrderItems({
       order_no,
       item_id,
       quantity,
       price,
       date
    })

    newOrderItems.save().then(()=>{
        res.json("Order Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//retrive data in orderItems
router.route("/retrieve").get((req,res)=>{

    OrderItems.find().then((orderItems)=>{
        res.json(orderItems)
    }).catch((err)=>{
        console.log(err)
    })
})

//update bar order Items
router.route("/update/:id").put(async(req,res)=>{
    let orderIt = req.params.id;
    const {order_no,item_id,quantity,price,date} = req.body;

    const updateOrderItems = {
        order_no,
        item_id,
        quantity,
        price,
        date
    }

    OrderItems.findByIdAndUpdate(orderIt,updateOrderItems).then((UpdateLick)=>{
        res.json("Success");
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error: err.message});
    })
})

//delete order items
router.route("/delete/:id").delete(async(req,res)=>{
    let orderId = req.params.id;

    await OrderItems.findByIdAndDelete(orderId).then(()=>{
        res.status(200).send({status: "Order item Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete order items", error: err.message});

    })
})

//get one order
router.route("/gett/:id").get(async(req,res)=>{
    let orderId = req.params.id;
    OrderItems.findById(orderId).then((orderItems)=>{
        res.json(orderItems)
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get order", error: err.message});
    })
})

module.exports = router;
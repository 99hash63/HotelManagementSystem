const router = require("express").Router();
const {json} = require("body-parser");
let BarOrders = require("../models/BarOrders");

//add order
router.route("/add").post((req,res)=>{

    const order_no = Number(req.body.order_no);
    const total_amount = Number(req.body.total_amount);
    const discount = Number(req.body.discount);
    const customer_nic = req.body.customer_nic;


    const newBarOrders = new BarOrders({
       order_no,
       total_amount,
       discount,
       customer_nic
    })

    newBarOrders.save().then(()=>{
        res.json("Order Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//retrive data in orders
router.route("/retrieve").get((req,res)=>{

    BarOrders.find().then((barOrders)=>{
        res.json(barOrders)
    }).catch((err)=>{
        console.log(err)
    })
}) 


//update bar orders
router.route("/update/:id").put(async(req,res)=>{
    let Order_id = req.params.id;
    const {order_no,total_amount,discount,customer_nic} = req.body;

    const updateBarOrders = {
       order_no,
       total_amount,
       discount,
       customer_nic
    }

    BarOrders.findByIdAndUpdate(Order_id,updateBarOrders).then((UpdateLick)=>{
        res.json("Success");
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error: err.message});
    })
})


//delete order
router.route("/delete/:id").delete(async(req,res)=>{
    let orderId = req.params.id;

    await BarOrders.findByIdAndDelete(orderId).then(()=>{
        res.status(200).send({status: "Order Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete order", error: err.message});

    })
})

//get one order
router.route("/gett/:id").get(async(req,res)=>{
    let orderId = req.params.id;
    BarOrders.findById(orderId).then((barOrders)=>{
        res.json(barOrders)
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get order", error: err.message});
    })
})

module.exports = router;
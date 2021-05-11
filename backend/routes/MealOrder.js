const router = require("express").Router();
var Order = require("../models/MealOrder");
const { json } = require("body-parser");

router.route("/addMeal").post((req,res)=>{
    const {OrderId,Mail_Address,Total_Amount} = req.body;

    const newOrder = new Order({OrderId,Mail_Address,Total_Amount})
    newOrder.save().then(()=>
        res.json("Order Added")
    ).catch(err=>
        res.json(err)
    )
});



//retrive meal order details using relevent  mail
router.route("/Retrieve/:id").get(async(req,res)=>{
    var mail = req.params.id;
    await Order.find({ Mail_Address: mail }).then((order)=>{
       res.json(order)
        console.log(order)
    }).catch((err)=>{
        console.log(err);
    })
})



//Retrieve all meal orders for suggest mail address 
router.route("/Retrieve").get((req,res)=>{
    var mail = req.params.id;
    Order.find().then((order)=>{
        res.json(order);
        console.log(order)
    }).catch((err)=>{
        console.log(err);
    })
})


// router.route("/get/:id").get(async(req,res)=>{
//     let itemID = req.params.id;

//    await Items.findById(itemID).then((item)=>{
//         res.status(200).send({status:"Item fetched", item});
//     }).catch((e)=>{
//         res.status(500).send({status:"Error"});
//     })

// })



module.exports = router;
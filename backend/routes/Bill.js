const router = require("express").Router();
var fBill = require("../models/Bill");
const { json } = require("body-parser");


router.route("/AddBill").post((req,res)=>{
    const {CusName,NIC,Allocationa_Amount,Mail,Meal_Order_Cost,BarOrder_Cost,Additional_Bill,Final_Cost} = req.body;

    const newBill = new fBill({CusName,NIC,Allocationa_Amount,Mail,Meal_Order_Cost,BarOrder_Cost,Additional_Bill,Final_Cost})
    newBill.save().then(()=>
        res.status(200).send({status:"Agent Add Success"})
    ).catch(err=>
        res.status(500).send({status: err})
    )
});



module.exports = router;
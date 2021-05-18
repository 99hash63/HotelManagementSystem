const router = require("express").Router();
var fBill = require("../models/Bill");
const { json } = require("body-parser");


//Add Bill
router.route("/AddBill").post((req,res)=>{
    const {CusName,NIC,Allocationa_Amount,Mail,Meal_Order_Cost,BarOrder_Cost,Additional_Bill,Final_Cost} = req.body;

    const newBill = new fBill({CusName,NIC,Allocationa_Amount,Mail,Meal_Order_Cost,BarOrder_Cost,Additional_Bill,Final_Cost})
    newBill.save().then(()=>
        res.status(200).send({status:"Success"})
    ).catch(err=>
        res.status(500).send({status: err})
    )
});



//View All Bills
router.route("/ViewBills").get((req,res)=>{
    fBill.find().then((FinalBill)=>{
        console.log(FinalBill)
        res.json(FinalBill);
    }).catch((err)=>{
        res.json(err);
    })
})



module.exports = router;
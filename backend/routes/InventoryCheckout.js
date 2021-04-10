const router = require('express').Router();
const Checkout = require('../models/InventoryCheckout');


router.route("/add").post((req,res)=>{

    const {name,model,sku,category,to,description,quantity,unit_price,total_price,date} =req.body;

    const newItem = new Checkout({
        name,model,sku,category,to,description,quantity,unit_price,total_price,date
    })
    newItem.save().then(()=>{
        res.status(200).json("added");
    }).catch((e)=>{
        console.log(e);
    })

})

router.route("/").get((req,res)=>{
    Checkout.find().then((Checkout)=>{
        res.json(Checkout)
    }).catch((e)=>{
        console.log(e);
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let itemID = req.params.id;
    const {name,model,sku,category,to,description,quantity,unit_price,total_price,date} =req.body;

    const updateItem ={
        name,model,sku,category,to,description,quantity,unit_price,total_price,date
    }

     await Checkout.findByIdAndUpdate(itemID,updateItem).then(()=>{
        res.status(200).send({status:"user updated"});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })

})


router.route("/delete/:id").delete(async(req,res)=>{
    let itemID = req.params.id;
    await Checkout.findByIdAndDelete(itemID).then(()=>{
        res.status(200).send({status:"Deleted"});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let itemID = req.params.id;

   await Checkout.findById(itemID).then((item)=>{
        res.status(200).send({status:"Item fetched", item});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })

})






module.exports = router;
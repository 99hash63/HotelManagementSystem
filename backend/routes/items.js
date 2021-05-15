const router = require('express').Router();
const Items = require('../models/items');


router.route("/add").post((req,res)=>{

    const {inventoryID,name,model,sku,category,supplier,description,mesurement,quantity,restock_level,original_price,selling_price,profit,date} =req.body;

    const newItem = new Items({
        inventoryID,name,model,sku,category,supplier,description,mesurement,quantity,restock_level,original_price,selling_price,profit,date
    })
    newItem.save().then(()=>{
        res.status(200).json("added");
    }).catch((e)=>{
        console.log(e);
    })

})

router.route("/").get((req,res)=>{
    Items.find().then((Items)=>{
        res.json(Items)
    }).catch((e)=>{
        console.log(e);
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let itemID = req.params.id;
    const {name,model,sku,category,supplier,description,mesurement,quantity,restock_level,original_price,selling_price,profit,date} =req.body;

    const updateItem ={
        name,model,sku,category,supplier,description,mesurement,quantity,restock_level,original_price,selling_price,profit,date
    }

     await Items.findByIdAndUpdate(itemID,updateItem).then(()=>{
        res.status(200).send({status:"user updated"});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })

})

router.route("/updatestock/:id").put(async (req,res)=>{
    let itemID = req.params.id;
    const {total} =req.body;
 
    const updateStock = {
        $set: {
           quantity: total,
        },
     };

     await Items.findByIdAndUpdate(itemID,updateStock).then(()=>{
        res.status(200).send({status:"user updated"});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })

})

router.route("/delete/:id").delete(async(req,res)=>{
    let itemID = req.params.id;
    await Items.findByIdAndDelete(itemID).then(()=>{
        res.status(200).send({status:"Deleted"});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let itemID = req.params.id;

   await Items.findById(itemID).then((item)=>{
        res.status(200).send({status:"Item fetched", item});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })

})






module.exports = router;
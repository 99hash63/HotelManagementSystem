const router = require("express").Router();
const {json} = require("body-parser");
let BarInventory = require("../models/BarInventory");

//add inventory items
router.route("/add").post((req,res)=>{

    const item_id = req.body.item_id;
    const name = req.body.name;
    const category = req.body.category;
    const supplier = req.body.supplier;
    const quantity = Number(req.body.quantity);
    const unitPrice = Number(req.body.unitPrice);
    const date = Date(req.body.date);

    const newBarInventory = new BarInventory({
        item_id,
        name,
        category,
        supplier,
        quantity,
        unitPrice,
        date
    })

    newBarInventory.save().then(()=>{
        res.json("Item Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//retrive data in stock
router.route("/retrieve").get((req,res)=>{

    BarInventory.find().then((barInventory)=>{
        res.json(barInventory)
    }).catch((err)=>{
        console.log(err)
    })
}) 


//update bar inventory
router.route("/update/:id").put(async(req,res)=>{
    let Item_id = req.params.id;
    const {item_id,name,category,supplier,quantity,unitPrice,date} = req.body;

    const updateBarInventory = {
        item_id,
        name,
        category,
        supplier,
        quantity,
        unitPrice,
        date
    }

    BarInventory.findByIdAndUpdate(Item_id,updateBarInventory).then((UpdateLick)=>{
        res.json("Success");
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error: err.message});
    })
})




//delete item 
router.route("/delete/:id").delete(async(req,res)=>{
    let itemId = req.params.id;

    await BarInventory.findByIdAndDelete(itemId).then(()=>{
        res.status(200).send({status: "Item Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete item", error: err.message});

    })
})


//get one item
router.route("/gett/:id").get(async(req,res)=>{
    let itemId = req.params.id;
    BarInventory.findById(itemId).then((barInventory)=>{
        res.json(barInventory)
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get item", error: err.message});
    })
})

module.exports = router;








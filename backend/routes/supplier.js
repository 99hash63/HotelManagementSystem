const router = require('express').Router();
const Suppiler = require('../models/supplier');


router.route("/add").post((req,res)=>{

    const {name,description,contact,email,location} =req.body;

    const newSuppiler = new Suppiler({
        name,description,contact,email,location
    })
    newSuppiler.save().then(()=>{
        res.status(200).json("added");
    }).catch((e)=>{
        console.log(e);
    })

})

router.route("/").get((req,res)=>{
    Suppiler.find().then((Suppiler)=>{
        res.json(Suppiler)
    }).catch((e)=>{
        console.log(e);
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let supplierID = req.params.id;
    const {name,description,contact,email,location} =req.body;

    const updateSupplier ={
        name,description,contact,email,location
    }

     await Suppiler.findByIdAndUpdate(supplierID,updateSupplier).then(()=>{
        res.status(200).send({status:"supplier updated"});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })

})

router.route("/delete/:id").delete(async(req,res)=>{
    let supplierID = req.params.id;
    await Suppiler.findByIdAndDelete(supplierID).then(()=>{
        res.status(200).send({status:"Deleted"});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let supplierID = req.params.id;

   await Suppiler.findById(supplierID).then((supplier)=>{
        res.status(200).send({status:"supplier fetched", supplier});
    
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })

})






module.exports = router;
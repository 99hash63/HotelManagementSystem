const router = require('express').Router();
const Category = require('../models/category');


router.route("/add").post((req,res)=>{

    const {name} =req.body;

    const newCategory = new Category({
        name
    })
    newCategory.save().then(()=>{
        res.status(200).json("added");
    }).catch((e)=>{
        console.log(e);
    })

})

router.route("/").get( (req,res)=>{
    Category.find().then((Category)=>{
        res.json(Category)
    }).catch((e)=>{
        console.log(e);
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let categoryID = req.params.id;
    
    const {name} =req.body;

    const updateCategory ={
        name
    }

     await Category.findByIdAndUpdate(categoryID,updateCategory).then(()=>{
        res.status(200).send({status:"category updated"});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })

})

router.route("/delete/:id").delete(async(req,res)=>{
    await Category.findOneAndRemove({'name' : req.params.id}).then(()=>{
        res.status(200).send({status:"Deleted"});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let categoryID = req.params.id;

   await Category.findById(categoryID).then((category)=>{
        res.status(200).send({status:"category fetched", category});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })

})






module.exports = router;
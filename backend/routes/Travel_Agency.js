const router = require("express").Router();
const { json } = require("body-parser");
var Travel_Agent = require("../models/Travel_Agent_Schema");



//Add New Agent
router.route("/add").post((req,res)=>{
    const contract_id = req.body.contract_id;
    const name = req.body.name;
    const mail_Address = req.body.mail_Address;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const passcode = Number(req.body.passcode);
    const rate = Number(req.body.rate);

    const newAgency = new Travel_Agent({
        contract_id,
        name,
        mail_Address,
        mobile,
        address,
        passcode,
        rate
    })

    newAgency.save().then(()=>{
        res.status(200).send({status:"Agent Add Success"})
    }).catch(()=>{
        res.status(500).send({status:"Error"})
    })
})





//Retriew All Agencies
router.route("/Retrieve").get((req,res)=>{
    Travel_Agent.find().then((agency)=>{
        res.json(agency)
    }).catch((err)=>{
        console.log(err);
    })
  
})






//Update Agency
router.route("/update/:id").put(async(req,res)=>{

    var id = req.params.id;
    const {contract_id,name,mail_Address,mobile,address,passcode,rate} = req.body;

    const updateAgent = ({
        contract_id,
        name,
        mail_Address,
        mobile,
        address,
        passcode,
        rate
        
    })

 

    Travel_Agent.findByIdAndUpdate(id,updateAgent).then(()=>{
        res.status(200).send({status:"Sucess"})
    }).catch((err)=>{
        res.status(500).send({status:"Error"})
    })

})






//delete agencies
router.route("/delete/:id").delete((req,res)=>{

    var num = req.params.id;
    console.log(num);
    Travel_Agent.findByIdAndDelete(num).then(()=>{
        res.status(200).send({status:"Agent Add Success"})
    }).catch((err)=>{
        res.status(500).send({status:"Error"})
    }) 
})
module.exports = router;








//find special agencies
router.route("/find/:id").get((req,res)=>{

    var id = req.params.id;

    Travel_Agent.findById(id).then((agent)=>{
        
            res.json(agent);
    
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;
const router = require('express').Router();

let Vacation = require('../models/Vacationrequest');
//const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
//const keys = require('../config/keys');



router.route("/test").get((req,res)=>{
    res.json("Vacation function working");
});

router.route("/addvacation").post((req,res)=>{
    const eemail = req.body.eemail;
    const propose = req.body.propose;
    const vfrom = req.body.vfrom;
    const vto = req.body.vto;

    const newVacation =  new Vacation({ 
        eemail,
        propose,
        vfrom,
        vto,
       

    })

    //pass vacation object to mongodb database(Create function)
    newVacation.save().then(()=>{
        //function execute if new vacation details added to the database
        res.json("Vacation request created")

    }).catch((err)=>{
        //If error occurs this fuction execute
        console.log(err);
    });

})

    //Get all vacation requests details
    router.route("/Allvacations").get((req,res)=>{
        Vacation.find().then((vacations)=>{
            res.json(vacations)
        }).catch((err)=>{
            console.log(err)
        })
    })

      //Reject Vacation request from database
      router.route("/reject/:id").delete(async(req,res)=>{
        
        let vacationID = req.params.id;

        await Vacation.findByIdAndDelete(vacationID).then(()=>{
            res.status(200).send({status: "Vacation Request Rejected"});
        }).catch((e)=>{
            console.log(e);
               res.status(500).send({status:"Error in rejecting vacation requests"})
        })

    })

    module.exports= router;
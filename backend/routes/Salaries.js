const router = require('express').Router();

let Salary = require('../models/Salary');



router.route("/test").get((req,res)=>{
    res.json("salary function working")
});

router.route("/addsalary").post((req,res)=>{
    const email = req.body.email;
    const accountNo = req.body.accountNo;
    const basicSalary = req.body.basicSalary;
    const otRate = req.body.otRate;
    const otHours = req.body.otHours;
    const totalsalary = req.body.totalsalary;
    const paidDate = req.body.paidDate;
    

    const newSalary =  new Salary({ 
        email,
        accountNo,
        basicSalary,
        otRate,
        otHours,
        totalsalary,
        paidDate
    })

    //pass Salary object to mongodb database(Create function)
    newSalary.save().then(()=>{
        //function execute if new employee details added to the database
        res.json("Paid salary added to the database")

    }).catch((err)=>{
        //If error occurs this fuction execute
        console.log(err);
    });

})

    //Get All paid salary details
    router.route("/paidsalary").get((req,res)=>{
        Salary.find().then((salaries)=>{
            res.json(salaries)
        }).catch((err)=>{
            console.log(err)
        })
    })

    //Update employee details
    router.route("/update/:id").put(async(req,res)=>{
        let salaryID = req.params.id;  //get unique user id from data base

        const {email,accountNo,basicSalary,otRate,otHours,totalsalary,paidDate} = req.body;  // get update details from frontend

        const updateSalary = {
            email,
            accountNo,
            basicSalary,
            otRate,
            otHours,
            totalsalary,
            paidDate
            
        }

        const update = await Salary.findByIdAndUpdate(salaryID,updateSalary ).then(()=>{
            res.status(200).send({status: "Salary details are updated"});
        }).catch((e)=>{
         //console.log.(err.message);
            console.log(e);
            res.status(500).send({status:"Error in updating Salary datails"})
        })

        

    })

    //Delete employee details from database
    router.route("/delete/:id").delete(async(req,res)=>{
        
        let salaryID = req.params.id;

        await Salary.findByIdAndDelete(salaryID).then(()=>{
            res.status(200).send({status: "Paid Salary detail deleted from database"});
        }).catch((e)=>{
            console.log(e);
               res.status(500).send({status:"Error in deleting Salary datails"})
        })

    })

    //Get one paid salary details from database
    router.route("/get/:id").get((req,res)=>{
        let salaryID = req.params.id;
        Salary.findById(salaryID).then((Salary)=>{
            // res.status(200).send({status: "Employee fetched",Employee});
            res.json(Salary);
        }).catch((e)=>{
            console.log(e);
            //    res.status(500).send({status:"Error in get employee details"})
            res.json("Not");
        })

    })



module.exports= router;

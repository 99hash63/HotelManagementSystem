  
const router = require('express').Router();

let Employee = require('../models/Employee');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const keys = require('../config/keys');



router.route("/test").get((req,res)=>{
    res.json("Employee function working");
});

router.route("/addemployee").post((req,res)=>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const eType = req.body.eType;
    const dob = req.body.dob;
    const nic = req.body.nic;
    const address = req.body.address;
    const mobileno = req.body.mobileno;
    const bankaccountno = req.body.bankaccountno;
    const email = req.body.email;
    const password = req.body.password;

    const newEmployee =  new Employee({ 
        fname,
        lname,
        eType,
        dob,
        nic,
        address,
        mobileno,
        bankaccountno,
        email,
        password,

    })

    //pass employee object to mongodb database(Create function)
    newEmployee.save().then(()=>{
        //function execute if new employee details added to the database
        res.json("Employee added to the database")

    }).catch((err)=>{
        //If error occurs this fuction execute
        console.log(err);
    });

})

    //Get all employees details
    router.route("/Retrieve").get((req,res)=>{
        Employee.find().then((employees)=>{
            res.json(employees)
        }).catch((err)=>{
            console.log(err)
        })
    })

    //Update employee details
    router.route("/update/:id").put(async(req,res)=>{
        let employeeID = req.params.id;  //get unique user id from data base

        const {fname,lname,eType,dob,nic,address,mobileno,bankaccountno,email,password} = req.body;  // get update details from frontend

        const updateEmployee = {
            fname,
            lname,
            eType,
            dob,
            nic,
            address,
            mobileno,
            bankaccountno,
            email,
            password
            
        }

        const update = await Employee.findByIdAndUpdate(employeeID,updateEmployee ).then(()=>{
            res.status(200).send({status: "Employee details are updated"});
        }).catch((e)=>{
         //console.log.(err.message);
            console.log(e);
            res.status(500).send({status:"Error in updating employee datails"})
        })

        

    })

    //Delete employee details from database
    router.route("/delete/:id").delete(async(req,res)=>{
        
        let employeeID = req.params.id;

        await Employee.findByIdAndDelete(employeeID).then(()=>{
            res.status(200).send({status: "Employee deleted from database"});
        }).catch((e)=>{
            console.log(e);
               res.status(500).send({status:"Error in deleting employee datails"})
        })

    })

    //Get one employee details from database
    router.route("/get/:id").get((req,res)=>{
        let employeeID = req.params.id;
        Employee.findById(employeeID).then((Employee)=>{
            // res.status(200).send({status: "Employee fetched",Employee});
            res.json(Employee);
        }).catch((e)=>{
            console.log(e);
            //    res.status(500).send({status:"Error in get employee details"})
            res.json("Not");
        })

    })



    
    
    
    //User Validated
  /*  router.route("/login").post((req,res)=>{
        const email = req.body.email;
        const password = req.body.password;
        

        //Find user by email
        Employee.findOne({email}).then(employee =>{
            //Check for user
            if(!employee){

                return res.status(404).json({email:'User not found'});
            }

            //Check password
            bcrypt.compare(password, employee.password).then(isMatch => {
                if (isMatch) {
                  // User Matched
                  const payload = { fname: employee.fname, lname: employee.lname, eType: employee.eType, dob: employee.dob,nic: employee.nic, address: employee.address, email: employee.email, password: employee.password }; // Create JWT Payload
          
                  // Sign Token
                  jwt.sign(
                    payload,
                    keys.secret,
                    { expiresIn: 3600 },
                    (err, token) => {
                      res.json({
                        success: true,
                        token: 'Bearer ' + token
                      });
                    }
                  );
                } else {
                  errors.password = 'Password incorrect';
                  return res.status(400).json(errors);
                }
              });
            });
          });*/


    module.exports= router;





  
const router = require('express').Router();

let Employee = require('../models/Employee');
//const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
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
    const bank = req.body.bank;
    const bankbranch = req.body.bankbranch;
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
        bank,
        bankbranch,
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

        const {fname,lname,eType,dob,nic,address,mobileno,bank,bankbranch,bankaccountno,email,password} = req.body;  // get update details from frontend

        const updateEmployee = {
            fname,
            lname,
            eType,
            dob,
            nic,
            address,
            mobileno,
            bank,
            bankbranch,
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

//login
router.post("/Emplogin", async (req, res) => {
    try{
        const { email, password } = req.body;

        //validation
        if(!email || !password){
            return res
            .status(400)
            .json({errorMessage: "Please enter all required fields!"});
            }

        const existingEmployee = await Employee.findOne({email});
        if(!existingEmployee)
            return res.status(400).json({
                errorMessage: "Wrong email or password!"
            })

        const passwordCorrect = await compare(password, existingEmployee.password);
        if(!passwordCorrect)
            return res.status(400).json({
                errorMessage: "Wrong email or password!"
            })

        // sign the token
        const token = jwt.sign(
            {
                EmployeeFname: existingEmployee.fname, 
                EmployeeLname: existingEmployee.lname, 
                EmployeeEtype: existingEmployee.eType,
                Employeedob: existingEmployee.dob,
                Employeenic: existingEmployee.nic,
                Employeeaddress: existingEmployee.address,
                Employeemobile: existingEmployee.mobileno,
                Employeebank: existingEmployee.bank, 
                Employeebankbranch: existingEmployee.bankbranch,
                Employeebankaccountno: existingEmployee.bankaccountno,
                Employeeemail: existingEmployee.email,
                
            },
            process.env.JWT_SECRET
        );
       
        // send the token in a HTTP-only cookie
        res.cookie("token", token, {
                httpOnly: true,
            })
            .send();    


    } catch (err){
        console.error(err);
        res.status(500).send();
    }
});


//logout
router.get("/Emplogout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    })
    .send();
})

//check wether the user is loggedIn
router.get("/EmploggedIn", (req, res) => {
    try{
        const token = req.cookies.token;
        if(!token) return res.json(false);

        jwt.verify(token, process.env.JWT_SECRET);

        res.send(true);
    }catch(err){
        res.json(false);
    }
})

    
    
  


    module.exports= router;





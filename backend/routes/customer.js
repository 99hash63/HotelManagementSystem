const router = require('express').Router();
const e = require('express');
let Customer = require('../Models/customer');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");



// Add or register customer to the system
router.route('/add').post(async(req, res) => {
    try{
        const {fname, lname, address, NIC, nationality, passportNo, email, contact, password, passwordVerify} = req.body;

        // validations
        // validation - All required fields are entered
        if(!email || !password || !passwordVerify){
            return res
            .status(400)
            .json({errorMessage: "Please enter all required fields!"});
            }

        // validation - pw length is greater than 8 characters
        if(password.length <8){
            return res
            .status(400)
            .json({errorMessage: "Please enter a password of atleast 8 characters!"});
            }

        // validation - pw and verify pw are matching
        if(password != passwordVerify){
            return res
            .status(400)
            .json({errorMessage: "Passwords did not match!"});
            }

        // validation - existing customer
        const existingCus = await Customer.findOne({email});
        if(existingCus)
            return res.status(400).json({
                errorMessage: "An account with this email already exists!"
            })

        //hash the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // save new user to the database
        const newCustomer = new Customer({fname, lname, address, NIC, nationality, passportNo, email, contact, passwordHash});
        const savedCustomer = await newCustomer.save()
            // .then(()=> res.json('Customer added!'))
            // .catch(err=> res.status(400).json('Error: '+ err));

        //log in the customer instantly after registering    
        // sign the token
        const token = jwt.sign(
            {
                customerFname: savedCustomer.fname, 
                customerLname: savedCustomer.lname, 
                customerAddress: savedCustomer.address,
                customerNIC: savedCustomer.NIC,
                customerNationality: savedCustomer.nationality,
                customerPassportNo: savedCustomer.passportNo,
                customerEmail: savedCustomer.email,
                customerContact: savedCustomer.contact, 
            },
            process.env.JWT_SECRET
        );

        // send the token in a HTTP-only cookie
        res.cookie("token", token, {
                httpOnly: true,
            })
            .send();

    }catch(err){
        console.error(err);
        res.status(500).send();
    }   
});


//login
router.post("/login", async (req, res) => {
    try{
        const { email, password } = req.body;

        //validation
        if(!email || !password){
            return res
            .status(400)
            .json({errorMessage: "Please enter all required fields!"});
            }

        const existingCus = await Customer.findOne({email});
        if(!existingCus)
            return res.status(400).json({
                errorMessage: "Wrong email or password!"
            })

        const passwordCorrect = await bcrypt.compare(password, existingCus.passwordHash);
        if(!passwordCorrect)
            return res.status(400).json({
                errorMessage: "Wrong email or password!"
            })

        // sign the token
        const token = jwt.sign(
            {
                customerFname: existingCus.fname, 
                customerLname: existingCus.lname, 
                customerAddress: existingCus.address,
                customerNIC: existingCus.NIC,
                customerNationality: existingCus.nationality,
                customerPassportNo: existingCus.passportNo,
                customerEmail: existingCus.email,
                customerContact: existingCus.contact, 
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
router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    })
    .send();
})

//check wether the user is loggedIn
router.get("/loggedIn", (req, res) => {
    try{
        const token = req.cookies.token;
        if(!token) return res.json(false);

        jwt.verify(token, process.env.JWT_SECRET);

        res.send(true);
    }catch(err){
        res.json(false);
    }
})

// Get all customers
// router.route('/get').get((req, res) => {
//     Customer.find()
//         .then(customers => res.json(customers))
//         .catch(err => res.status(400).json('Error: ' +err));
// });


// Get relevant customer by email(cookie)
router.get('/get', auth, async(req, res) => {
    try{
        let email = req.customerEmail;
        await Customer.find({ email: email})
        .then(Customer => res.json(Customer))
        .catch(err => res.status(400).json('Error: ' + err));
    }catch (err){
        console.error(err);
        res.status(500).send();
    }
  });

// Delete relevant customer email(cookie)
router.delete('/delete', auth, async(req, res)=>{
    try{
        let email = req.customerEmail;
        await Customer.findOneAndDelete({ email: email})
        .then(()=> res.json('Customer deleted!'))
        .catch(err=> res.status(400).json('Error with deleting data: '+ err));
    }catch (err){
        console.error(err);
        res.status(500).send();
      } 
});

// Update relevant customer by id
router.post("/update", auth, async(req, res) =>{  
    
    try{
        const email = req.customerEmail;

        const {fname, lname, address, NIC, nationality, passportNo, contact, password, passwordVerify} = req.body;


        // validations
        // validation - All required fields are entered
        if(!email || !password || !passwordVerify){
            return res
            .status(400)
            .json({errorMessage: "Please enter all required fields!"});
            }

        // validation - pw length is greater than 8 characters
        if(password.length <8){
            return res
            .status(400)
            .json({errorMessage: "Please enter a password of atleast 8 characters!"});
            }

        // validation - pw and verify pw are matching
        if(password != passwordVerify){
            return res
            .status(400)
            .json({errorMessage: "Passwords did not match!"});
            }

        //hash the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const updateCustomer = {fname, lname, address, NIC, nationality, passportNo, email, contact, passwordHash};

        await Customer.findOneAndUpdate({ email: email}, updateCustomer)
        //log in the customer instantly after updating    
        // sign the token
        const token = jwt.sign(
            {
                customerFname: updateCustomer.fname, 
                customerLname: updateCustomer.lname, 
                customerAddress: updateCustomer.address,
                customerNIC: updateCustomer.NIC,
                customerNationality: updateCustomer.nationality,
                customerPassportNo: updateCustomer.passportNo,
                customerEmail: updateCustomer.email,
                customerContact: updateCustomer.contact, 
            },
            process.env.JWT_SECRET
        );

        // send the token in a HTTP-only cookie
        res.cookie("token", token, {
                httpOnly: true,
            })
            .send();

    }catch(err){
        console.error(err);
        res.status(500).send();
    }   
});

module.exports = router;
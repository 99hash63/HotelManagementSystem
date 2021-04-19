const router = require('express').Router();
const e = require('express');
let Customer = require('../Models/customer');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


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

        // sign the token
        const token = jwt.sign(
            {
                customer: savedCustomer._id,
            },
            process.env.JWT_SECRET
        );
        console.log(token);

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

// Get all customers
// router.route('/get').get((req, res) => {
//     Customer.find()
//         .then(customers => res.json(customers))
//         .catch(err => res.status(400).json('Error: ' +err));
// });


// Get relevant customer by id
router.route('/get/:Id').get((req, res) => {
    let Id = req.params.Id;
    Customer.findById(Id)
      .then(Customer => res.json(Customer))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Delete relevant customer by id
router.route('/delete/:Id').delete((req, res)=>{
    let Id = req.params.Id;

    Customer.findByIdAndDelete(Id)
        .then(()=> res.json('Customer deleted!'))
        .catch(err=> res.status(400).json('Error with deleting data: '+ err));
});

// Update relevant customer by id
router.route("/update/:id").post((req, res) =>{        
    
    const {fname, lname, address, NIC, nationality, passportNo, email, contact, password} = req.body;
    const updateCustomer = {fname, lname, address, NIC, nationality, passportNo, email, contact, password};
    
    let id = req.params.id;

    const update =  Customer.findByIdAndUpdate(id , updateCustomer)
        .then(()=> res.json('Customer updated!'))
        .catch(err=> res.status(400).json('Error with updating data: '+ err));
});

module.exports = router;
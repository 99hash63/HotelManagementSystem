const router = require('express').Router();
let Customer = require('../Models/customer');


// Add or register customer to the system
router.route('/add').post((req, res) => {
    const {fname, lname, address, NIC, nationality, passportNo, email, contact, password} = req.body;
    const newCustomer = new Customer({fname, lname, address, NIC, nationality, passportNo, email, contact, password});
    newCustomer.save()
        .then(()=> res.json('Customer added!'))
        .catch(err=> res.status(400).json('Error: '+ err));
}) ;

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
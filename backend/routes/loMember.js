const router = require('express').Router();
let loMember = require('../Models/loMember');


// Add new loyal member to the system
router.route('/add').post((req, res) => {
    const {email, type} = req.body;
    const startDate = new Date();
    const loPoints = 0;
    
    const newloMember = new loMember({email, type, startDate, loPoints});
    newloMember.save()
        .then(()=> res.json('newloMember added!'))
        .catch(err=> res.status(400).json('Error: '+ err));
}) ;


// Get users membership details when email is given
router.route('/get/:email').get((req, res) => {
    let email = req.params.email;
    loMember.find({ email: email})
      .then(loMember => res.json(loMember))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Delete member by id
router.route('/delete/:Id').delete((req, res)=>{
    let Id = req.params.Id;

    loMember.findByIdAndDelete(Id)
        .then(()=> res.json('loMember deleted!'))
        .catch(err=> res.status(400).json('Error with deleting data: '+ err));
});

// Update member by id
router.route("/update/:id").post((req, res) =>{        
    
    let id = req.params.id;

    const {email, type} = req.body;
    const startDate = new Date();
    const loPoints = 0;
    const updateloMember = {email, type, startDate, loPoints};
    
    const update = loMember.findByIdAndUpdate(id , updateloMember)
        .then(()=> res.json('loMember updated!'))
        .catch(err=> res.status(400).json('Error with updating data: '+ err));
});

module.exports = router;
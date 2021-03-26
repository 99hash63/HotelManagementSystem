const router = require('express').Router();
let loMembership = require('../Models/loMembership');


// get the available membership types
router.route('/get').get((req, res) => {
    loMembership.find({}, { type: 1 , _id: 0 })
        .then(loMemberships => res.json(loMemberships))
        .catch(err => res.status(400).json('Error: ' +err));
});

// Returns all the details when the membership type is given
router.route('/get/:type').get((req, res) => {
    let type = req.params.type;
    loMembership.find({ type: type })
        .then(loMemberships => res.json(loMemberships))
        .catch(err => res.status(400).json('Error: ' +err));
});




// Lahiru
// router.route('/add').post((req, res) => {
//     const {type, charge, validPeriod, discountPerPoint} = req.body;
//     const newloMembership = new loMembership({type, charge, validPeriod, discountPerPoint});
//     newloMembership.save()
//         .then(()=> res.json('loMembership added!'))
//         .catch(err=> res.status(400).json('Error: '+ err));
// });

module.exports = router;
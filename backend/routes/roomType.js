const router = require('express').Router();
let roomType = require('../Models/roomType');

// Add roomType
router.route('/add').post((req, res) => {
    const {typeName, capacity, AC, FullBoardPrice, HalfBoardPrice, BedAndBreakfastPrice} = req.body;
    const newRoomType = new roomType({typeName, capacity, AC, FullBoardPrice, HalfBoardPrice, BedAndBreakfastPrice});
    newRoomType.save()
        .then(()=> res.json('roomType added!'))
        .catch(err=> res.status(400).json('Error: '+ err));
}) ;

// Get all roomTypes 
router.route('/get').get((req, res) => {
    roomType.find()
        .then(roomType => res.json(roomType))
        .catch(err => res.status(400).json('Error: ' +err));
});



module.exports = router;
const jwt = require("jsonwebtoken");

function auth(req, res, next){
    try{
        const token = req.cookies.token;

        if(!token) return res.status(401).json({errorMessage: "Unauthorized"});

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        req.customerFname = verified.customerFname;
        req.customerLname = verified.customerLname;
        req.customerAddress = verified.customerAddress;
        req.customerNIC = verified.customerNIC;
        req.customerNationality = verified.customerNationality;
        req.customerPassportNo = verified.customerPassportNo;
        req.customerEmail = verified.customerEmail;
        req.customerContact = verified.customerContact;
                
        next();

    }catch (err) {
        console.error(err);
        res.status(401).json({errorMessage: "Unauthorized"});
    }
}
module.exports = auth;
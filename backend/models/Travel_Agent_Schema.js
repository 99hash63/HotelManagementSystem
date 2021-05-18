const mongoos = require("mongoose");
const schema = mongoos.Schema;

const agentChema = schema({
    contract_id : { type : String, required : true, unique:true},
    name : { type : String, required : true},
    mail_Address : { type : String, required : true},
    mobile : { type : String, required : true},
    address : { type : String, required : true},
    passcode : { type : Number, required : true},
    rate : { type : Number, required : true},
   
})

const Travel_Agency = mongoos.model("Travel_Agents", agentChema);

module.exports = Travel_Agency;


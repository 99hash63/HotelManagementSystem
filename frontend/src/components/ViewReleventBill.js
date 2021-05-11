// import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router";
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './FinalBill.css'


// function CostToPay(){
//     var [mail, setMail] = useState("");
//     var [cost , setCost] = useState("");
//     var { id } = useParams();
//     var[cost, setCost] = useState([]);
//     var[det , setDetail] = useState([]);

//     useEffect(()=>{
//         axios.get(`http://localhost:5000/Meal_Order/Retrieve/${id}`).then((cost)=>{
//             setMail(id);
//             setCost(cost.data);
//             console.log
//         }).catch((err)=>{
//             alert(err);
//         })
//     })



//     useEffect(()=>{
//         axios.get(`http://localhost:5000/findOne/Retrieve/${id}`).then((det)=>{
//             setDetail(det.data);
//             console.log(det);
//         }).catch((err)=>{
//             alert(err);
//         })
//     })

    
    
    
    
    
//     return(

//         <div className="display-box">
//                 <div className="content-box-list">
//                      <div className="header-box"> Calculate Final Bill </div>
//                      <table id="items">
              

//                         <tr>
//                             <th> User Mail</th>
//                             <th> Name</th>
//                             <th>Advanced Payment</th>
//                             <th>Food Bill</th>
//                             <th>Bar Bill</th>
//                             <th>Add Adition Payment</th>

//                         </tr>
               

//                 {cost.map(function(cost){
                    
                    
//                                return  <tr>
//                                 <td>{mail}</td>
//                                 <td></td>
//                                 <td></td>
//                                 <td>{cost.Total_Amount}</td>
//                                 <td></td>
//                                 <td><input type="number" placeholder="Enter Additional Payment"/></td>
//                             </tr>

//                 }) 
//             } 

//                     </table>
//             </div>
//         </div>
//     )
// }

// export default CostToPay;
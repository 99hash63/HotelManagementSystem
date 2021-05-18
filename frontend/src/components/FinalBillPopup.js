import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
// import './Suppliers.css'
import './FinalBills.css'
import { useParams } from "react-router";

function Popup(){
    const { id } = useParams();

    const [meal, setMealOrder] = useState([]);
    const [Final_Cost, TotAmount] = useState(0);
    
    const [bar, setBarOrder] = useState([]);
    const [detail, setBookinDetails] = useState([]);
    const [CusName, setName] = useState("");
    const [NIC, setNic] = useState("");
    const [Mail, setMail] = useState("");


    const [Additional_Bill, setAdditional] = useState(0);
    const [BarOrder_Cost, setBarBill] = useState(100);
    const [Meal_Order_Cost, setFoodBill] = useState(3300);
    const [Allocationa_Amount, setPrice] = useState(0);


    //enable enter addititonal amount
    function unHideText(){
       var x = document.getElementById('fs')
       if(x==="none"){
        x.style.display = "block";

       }else{
        x.style.display = "block";

       }
       document.getElementById('btn1').style.display = "none"; 
     
    }





    //hide Additional amount text box
    function hideText(){
        document.getElementById('fs').style.display = "none"
        document.getElementById('btn1').style.display = "block";
     
    }

  


    //Save Those details into final bills
    function saveFinalBill(e,mail){

        const result = window.confirm("Confirm Payment?");
        if(result == true){
            console.log(mail);
            e.preventDefault();
        
                const newBill = {
                    CusName,
                    NIC,
                    Allocationa_Amount,
                    Mail,
                    Meal_Order_Cost,
                    BarOrder_Cost,
                    Additional_Bill,
                    Final_Cost
        
                }
        
                
                    axios.post("http://localhost:5000/FinalBill/AddBill", newBill).then(() => {
                        axios.put(`http://localhost:5000/booking/PassCus/${id}`).then(()=>{
                            window.location = "/front-office-manager/FinalBill"
                        alert("Final Bill Create Successfuly");
                        })
                        
                    }).catch((err) => {
                        alert(err);
                    })

                    // axios.put(`http://localhost:5000/booking/PassCus/${id}`).then(()=>{

                    // }).catch((err)=>{
                    //     alert(err);
                    // })
                
                   

              
               

        }else{
            window.location="/front-office-manager/FinalBill";
            console.log(Mail);
        }
       

    }



    //Find user Details
    useEffect(() => {
        axios.get(`http://localhost:5000/booking/findOne/${id}`).then((res) => {

        if(res.data.length === 0){
            window.location = "/front-office-manager/FinalBill"
            alert("Inavlid NIC Number")
        }else{
            setBookinDetails(res.data[0]);
            setPrice(res.data[0].price);
            setName(res.data[0].fName);
            setNic(res.data[0].NIC);
            setMail(res.data[0].email);
            var x = document.getElementById("myDIV");
                if (x.style.display === "none") {
                    x.style.display = "block";               
                } 
                else {
                     x.style.display = "block";
                }
               
        }
            
        }).catch((err) => {
            alert(err);
        })

    }, [])




   

    //Find User's Bar Bill
    useEffect(() => {
        axios.get(`http://localhost:5000/Meal_Order/Retrieve/${id}`).then((res) => {
        if(res.data.length === 0){

        }else{
            setMealOrder(res.data[0]);
            setFoodBill(res.data[0].Total_Amount);
            
            var x = document.getElementById("myDIV");
                if (x.style.display === "none") {
                    x.style.display = "block";
                         
                } 
                else {
                     x.style.display = "block";
                }
        }
                   
        }).catch((err) => {
            alert(err);
        })

    }, [])



    //Calculate Total Bill
    useEffect(() => {
        TotAmount(parseInt(BarOrder_Cost)+parseInt(Meal_Order_Cost)+parseInt(Allocationa_Amount)+parseInt(Additional_Bill));
       
    })


    



    return(
        <div id="myDIV" hidden>
                
                <dir className="blur-s">
                    <div className="content-box-sfb">
                        <div className="add-sup-head">
                        <div className="title">Final Bill</div><br/>
                       
                            <Link className="btn" to={"/front-office-manager/FinalBill"} >&times;</Link>
                        </div>
                        <p>__________________________________________</p>
                        <div className="finalbill-content">
                            <table setBarOrder="1">
                                <tr><th>Full Name </th>   :   <td>  {CusName}</td></tr>
                                <tr><th>NIC</th>   :   <td>  {NIC}</td> </tr>
                                <tr><th>Allocation Cost</th>   :   <td>  {Allocationa_Amount}</td> </tr>
                                <tr><th>Meal Order Cost</th>   :   <td>  {Meal_Order_Cost}</td> </tr>
                                <tr><th>Bar Order Cost</th> : <td>  {BarOrder_Cost}</td> </tr>
                                <tr><th>Additional Amount</th> : <td>  {Additional_Bill}</td> </tr>
                            </table>

                            <fieldset hidden className="box" id="fs">
                            <input type="text" class="searchTerm" placeholder="Enter Additional Bill Here" onChange={(e) => { setAdditional(e.target.value); }} readonly/>
                            <button id="btn2" onClick={hideText}>Done</button>
                            </fieldset>
                            
                            <button id="btn1" onClick={unHideText}>Enter Additional Bill</button>
                            <h1>LKR {Final_Cost}</h1>
                           
                            <button id="bt" onClick={e=>saveFinalBill(e,meal.Mail_Address)}>Paid</button>

                        </div>
                    </div>
                </dir>
            </div>
    )
}


export default Popup;
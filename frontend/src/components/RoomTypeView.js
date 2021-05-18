import React, { useState, useEffect } from 'react';
import './Suppliers.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const RoomTypeView = () => {
    const history = useHistory();
    const { id } = useParams();
    const [typeName, settype] = useState("");
    const [capacity, setcapacity] = useState("");
    const [AC, setAC] = useState("");
    const [FullBoardPrice, setfullBoardPrice] = useState("");
    const [HalfBoardPrice, sethalfBoardPrice] = useState("");
    const [BedAndBreakfastPrice, setbedAndBreakfastPrice] = useState("");



    const [roomType, setroomType] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:5000/roomType/get/${id}`).then((res) => {
           
                setroomType(res.data)
                console.log(res.data)

                settype(res.data.typeName)
                setcapacity(res.data.capacity)
                setAC(res.data.AC)
                setfullBoardPrice(res.data.FullBoardPrice)
                sethalfBoardPrice(res.data.HalfBoardPrice)
                setbedAndBreakfastPrice(res.data.BedAndBreakfastPrice)

            
        }).catch((e) => {
            console.log(e);
         
        })

    },[])



    function updateData(e) {
        e.preventDefault();


        const newRoomType = {
            typeName, capacity, AC, FullBoardPrice, HalfBoardPrice, BedAndBreakfastPrice
        }

        axios.put(`http://localhost:5000/roomType/update/${id}`, newRoomType).then(() => {

            window.location = "/room-manager/roomType"

        }).catch((e) => {
            alert("error");
        })

    }

    var timesClicked =0;
    const deleteData = (e) => {
        e.preventDefault();
        timesClicked++;
        
        if (timesClicked > 1) {

            axios.delete(`http://localhost:5000/roomType/delete/${id}`).then(() => {
                window.location = "/room-manager/roomType"
            }).catch((e) => {
    
                alert("error");
    
            })

        } else {
            document.getElementById('delete-sup btnq').innerHTML = "Confirm Delete"
            document.getElementById("delete-sup btnq").style.color = "white";
            document.getElementById("delete-sup btnq").style.backgroundColor ="rgb(255, 0, 55)"
            document.getElementById("delete-sup btnq").style.borderColor ="rgb(255, 0, 55)"
        }

    }



    return (
        <div className="display-box">
             <i  onClick={() => { history.goBack();}} class="fas fa-chevron-circle-left"></i>
            <div className="header-box-sup"> Room Type
            </div>

            <div className="supplier-list" >

            <form  id="supform" >

                            <div className="form1-l" >

                                <label className="custom-field-s">
                                <input defaultValue={roomType.typeName} type="text" className="form-input" id="name-s" onChange={(e) => {
                                    settype(e.target.value)
                                }} required />
                                    
                                    <span className="placeholder">Type Name</span>
                                </label>
                                 
                                <br />
                                <label className="custom-field-s">
                                <input defaultValue={roomType.capacity} type="text" className="form-input" id="name-s" onChange={(e) => {
                                    setcapacity(e.target.value)
                                }} required />
                               
                                    <span className="placeholder">Capacity</span>
                                </label>
                                <br />
                                <label className="custom-field-s">
                                <select name="supplier" id="contact-s" onChange={(e) => {
                                    setAC(e.target.value)
                                }} >
                                    {/* <option >select </option> */}
                                     <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    
                                    </select>
                                <span className="placeholder">AC</span>
                            </label>

                             
                
                                <br />


                            </div>
                            <div className="form2">
                            
                                <label className="custom-field-s">
                                 
                                <input defaultValue={roomType.FullBoardPrice} type="text" className="form-input" id="location-s" onChange={(e) => {
                                    setfullBoardPrice(e.target.value)
                                }} required />
                                    
                                    <span className="placeholder">FullBoardPrice</span>
                                </label>
                             
                                <br />
                                <label className="custom-field-s">
                                 
                                <input defaultValue={roomType.HalfBoardPrice} type="text" className="form-input" id="email-s" onChange={(e) => {
                                    sethalfBoardPrice(e.target.value)
                                }} required />
                                    
                                    <span className="placeholder">HalfBoardPrice</span>
                                </label>
                                <br />
                                <label className="custom-field-s">
                                <input defaultValue={roomType.BedAndBreakfastPrice} type="text" className="form-input" id="email-s" onChange={(e) => {
                                    setbedAndBreakfastPrice(e.target.value)
                                }} required />
                                   
                                    <span className="placeholder">BedAndBreakfastPrice</span>
                                </label>
                                <br />

                                <button onClick={(e) => updateData(e)} className="edit-sup btnq">Update</button>
                                <button id="delete-sup btnq" onClick={(e) => deleteData(e)} className="delete-sup btnq">Delete</button>
                            </div>

                        </form>
                  
                
                
            
            </div>
        </div>
    );
}

export default RoomTypeView;
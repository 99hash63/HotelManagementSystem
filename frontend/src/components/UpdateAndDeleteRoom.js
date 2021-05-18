import React, { useState, useEffect } from 'react';
import './Suppliers.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const UpdateAndDeleteRoom = () => {
    const history = useHistory();
    const { id } = useParams();
    const [roomNo, setNo] = useState("");
    const [type, settype] = useState("");
    const [buildingNo, setBuildingNo] = useState("");
    const [floorNum, setFloorNum] = useState("");
    const [specialDetails, setSpecialDetails] = useState("");
    
     const [room, setroom] = useState([]);

    //  const [typeName,settypeName] = useState([]);
     const [getroomtype,setgetroomtype] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:5000/room/get/${id}`).then((res) => {
           
                setroom(res.data)
                console.log(res.data)

                setNo(res.data.roomNo)
                settype(res.data.type)
                setBuildingNo(res.data.buildingNo)
                setFloorNum(res.data.floorNum)
                setSpecialDetails(res.data.specialDetails)
                

            
        }).catch((e) => {
            console.log(e);
         
        })
// fetching room types from the DB
        axios.get(`http://localhost:5000/roomType/get/`).then((res) => {
            setgetroomtype(res.data.map(roomType => roomType.typeName))

        }).catch((e1) => {
            console.log(e1);
         
        })

    },[])



    function updateData(e) {
        e.preventDefault();


        const newRoom = {
            roomNo, type, buildingNo, floorNum, specialDetails
        }

        axios.put(`http://localhost:5000/room/update/${id}`, newRoom).then(() => {

            window.location = "/room-manager"

        }).catch((e) => {
            alert("error");
        })

    }

    var timesClicked =0;
    const deleteData = (e) => {
        e.preventDefault();
        timesClicked++;
        
        if (timesClicked > 1) {

            axios.delete(`http://localhost:5000/room/delete/${id}`).then(() => {
                window.location = "/room-manager"
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
            <div className="header-box-sup"> Room 
            </div>

            <div className="supplier-list" >

            <form  id="supform" >

                            <div className="form1-l" >

                                <label className="custom-field-s">
                                <input defaultValue={room.roomNo} type="text" className="form-input" id="name-s" onChange={(e) => {
                                    setNo(e.target.value)
                                }} required />
                                    
                                    <span className="placeholder">Room Number</span>
                                </label>
                                 
                                <br />
                                <label className="custom-field-s">
                                    <textarea defaultValue={room.specialDetails} name="description" className="form-input" id="description-s" cols="0" rows="5" maxLength="200" onChange={(e) => {
                                        setSpecialDetails(e.target.value)
                                    }} ></textarea>
                                    <span className="placeholder">Special Details</span>
                                </label>



                                
                                
                                
                                
                                <br />


                                


                                

                                
                                
                            </div>
                            <div className="form2">
                            <label className="custom-field-s">
                                <input defaultValue={room.buildingNo} type="text" className="form-input" id="contact-s" onChange={(e) => {
                                    setBuildingNo(e.target.value)
                                }} required />
                                    
                                    <span className="placeholder">Building Number</span>
                                </label>
                                <br />
                                <label className="custom-field-s">
                                 
                                <input defaultValue={room.floorNum} type="text" className="form-input" id="email-s" onChange={(e) => {
                                    setFloorNum(e.target.value)
                                }} required />
                                    
                                    <span className="placeholder">floor Number</span>
                                </label>
                             
                                <br />
                             
                               

                                <label className="custom-field-s">
                                {/* <input defaultValue={room.type} type="text" className="form-input" id="type-r" onChange={(e) => {
                                    settype(e.target.value)
                                }} required />
                               
                                    <span className="placeholder">Type</span> */}
                                    <select Value={room.type} className="form-input" id="location-s" onChange={(e) => {
                                        settype(e.target.value)

                                    }}>
                                        {/* <option >Select </option> */}
                                    
                                    <option value="Single">Single</option>
                                    <option value="Double">Double</option>
                                    <option value="Triple">Triple</option>
                                    <option value="Quad">Quad</option>
                                    <option value="">Queen</option>
                                    <option value="King">King</option>
                                    <option value="Twin">Twin</option>

                                            {/* {
                                                    getroomtype.map(function (typeName) {

                                                        return 
                                                        <option key={typeName} value={typeName}>{typeName}</option>

                                                     })
                                              } */}
                                    </select>
                                    <span className="placeholder">Type</span>
                                </label>
                                <br />

                            
                                
                                <button  onClick={(e) => updateData(e)} className="edit-sup btnq" >Update</button>
                                <button id="delete-sup btnq" onClick={(e) => deleteData(e)} className="delete-sup btnq">Delete</button>

                                {/* <button id="update_inventory" style={{ display: "none" }} className="addinventory-btn">Update Inventory</button> */}
                                {/* <div>Inventory<button id="generate-reportt-btn" onClick={() => generatePDF(inventory)}>Create Report</button></div>
 */}

                            </div>

                        </form>
                  
                
                
            
            </div>
        </div>
    );
}

export default UpdateAndDeleteRoom;
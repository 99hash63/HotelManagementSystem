import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Suppliers.css'

const AddRoomType = ({rtPOP}) => {

    const [typeName, settype] = useState("");
    const [capacity, setcapacity] = useState("");
    const [AC, setAC] = useState("");
    const [FullBoardPrice, setfullBoardPrice] = useState("");
    const [HalfBoardPrice, sethalfBoardPrice] = useState("");
    const [BedAndBreakfastPrice, setbedAndBreakfastPrice] = useState("");


    function sendData(e) {
        e.preventDefault();

        const newRoomType = {
            typeName, capacity, AC, FullBoardPrice, HalfBoardPrice, BedAndBreakfastPrice
        }

        axios.post(" http://localhost:5000/roomType/add", newRoomType).then(() => {

            window.location = "/roomType"

        }).catch((e) => {
            alert("error");
        })

    }


    return (
        <div>
            {/* for backgroung blur */}
            <dir className="blur-s">


                <div className="content-box-s">
               
                    <div className="add-sup-head">
                    <span   className="btnn"  onClick={rtPOP} style={{cursor:"pointer"}} >&times;</span>
                        <div className="title">Add Room Type </div>
                       
                        
                        </div>

                    <hr />


                    <form onSubmit={sendData}style={{width:"450px"}} >

                        <div className="form1">

                            <label className="custom-field-s">
                                <input type="text" className="form-input" id="roomtype" onChange={(e) => {
                                    settype(e.target.value)
                                }} required />
                                <span className="placeholder">Room Type</span>
                            </label>
                            <br />
                            <label className="custom-field-s">
                                <input type="text" className="form-input" id="capacity" min="1" onChange={(e) => {
                                    setcapacity(e.target.value)
                                }} required />
                                <span className="placeholder">Capacity</span>
                            </label>
                            <br />

                            
                            <label className="custom-field-s">
                                <input type="text" className="form-input" id="fullb" onChange={(e) => {
                                    setfullBoardPrice(e.target.value)
                                }} required />
                                <span className="placeholder">FullBoard Price</span>
                            </label>
                            <br />
                            <label className="custom-field-s">
                                <input type="text" className="form-input" id="halfb" onChange={(e) => {
                                    sethalfBoardPrice(e.target.value)
                                }} required />
                                <span className="placeholder">HalfBoard Price</span>
                            </label>
                            <br />
                            
                            <label className="custom-field-s">
                                <input type="text" className="form-input" id="bedand" onChange={(e) => {
                                    setbedAndBreakfastPrice(e.target.value)
                                }} required />
                                <span className="placeholder">Bed And Breakfast Price</span>
                            </label>
                            <br />
                            <label className="custom-field-s">
                                <select name="supplier" id="ac" onChange={(e) => {
                                    setAC(e.target.value)
                                }} >
                                    
                                    <option>select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    
                                    </select>
                                <span className="placeholder">AC</span>
                            </label>

                            {/* <label className="custom-field-s">
                                <input type="text" className="form-input" id="ac" onChange={(e) => {
                                    setAC(e.target.value)
                                }} />
                                <span className="placeholder">AC</span>
                            </label> */}
                            <br />

                        </div>
                        <button className="add-sup-btn">Add</button>
                    </form>

                </div>

            </dir>
        </div>
    );
}

export default AddRoomType;
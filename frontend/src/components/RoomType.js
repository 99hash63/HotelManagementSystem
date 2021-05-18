import React, { useState, useEffect } from 'react';
import './Suppliers.css'
import axios from 'axios'
import AddRoomType from './AddRoomType';
import { Link } from 'react-router-dom'


const RoomType = () => {

    const [typeName, settype] = useState("");
    const [capacity, setcapacity] = useState("");
    const [AC, setAC] = useState("");
    const [FullBoardPrice, setfullBoardPrice] = useState("");
    const [HalfBoardPrice, sethalfBoardPrice] = useState("");
    const [BedAndBreakfastPrice, setbedAndBreakfastPrice] = useState("");



    const [roomType, setroomType] = useState([]);
    

    useEffect(() => {
        axios.get("http://localhost:5000/roomType/").then((res) => {
            if (res.data.length > 0) {
                setroomType(res.data);
               
            }
        }).catch((e) => {
            console.log(e);
        })
       

    }, [])



    function addRoomTypePOP() {
        const x = document.getElementById("add-new-rt").style.display;
        if (x == "none") {
            document.getElementById('add-new-rt').style.display = "block";
        }
        else {
            document.getElementById('add-new-rt').style.display = "none ";
        }
    }

    function updateData(sup, e) {
        e.preventDefault();
        

const newRoomType = {
            typeName, capacity, AC, FullBoardPrice, HalfBoardPrice, BedAndBreakfastPrice
        }

        axios.put(`http://localhost:5000/roomType/update/${sup._id}`, newRoomType).then(() => {

            // window.location = "/inventory"

        }).catch((e) => {
            alert("error");
        })

    }

    function deleteData(id, e) {
        e.preventDefault();
        axios.delete(`http://localhost:5000/roomType/delete/${id}`).then(() => {
            window.location = "/room-manager"
        }).catch((e) => {

            alert("error");

        })

    }


    return (
        <div className="display-box">
           
            <div className="header-box-sup"> Room Type
            <button  id="add-new-sup-btn" onClick={addRoomTypePOP} style={{ display: "block",width:"140px" }}>Add Room Type</button>
            </div>
            
            <div id="add-new-rt" style={{ display: "none" }}>  <AddRoomType rtPOP={addRoomTypePOP} /> </div>

            <div className="supplier-list" >

                <table >
                    <thead>
                        <tr>
                            <th>Type Name</th>
                            <th>Capacity</th>
                            <th>AC</th>
                            <th>FullBoard Price</th>
                            <th>HalfBoard Price</th>
                            <th>Bed And Breakfast Price</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            roomType.slice(0).reverse().map(function (f) {
                                return <tr>

                                    <td >{f.typeName}</td>
                                    <td >{f.capacity} </td>
                                    <td >{f.AC} </td>
                                    <td >{f.FullBoardPrice} </td>
                                    <td >{f.HalfBoardPrice} </td>
                                    <td>{f.BedAndBreakfastPrice}</td>
                                    <td > <Link to={"/room-manager/roomTypeview/" + f._id} ><i class="far fa-edit"></i></Link></td>

                                </tr>

                            })
                        }
                    </tbody>
                </table>




            </div>
        </div>
    );
}

export default RoomType;
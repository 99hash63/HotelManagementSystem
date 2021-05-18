import React,{useState} from "react"
import axios from "axios"
import './AddRoom.css'


export default function AddRoom(){

    const [roomNo, setRoomNo] = useState("");
    const [type, setType] = useState("");
    const[buildingNo, setBuildingNo] = useState("");
    const[floorNum,  setFloorNum] = useState("");
    const[specialDetails, setSpecialDetails] = useState("");

    function sendData(e){
       

     const newRoom = {
        roomNo,
        type,
        buildingNo,
        floorNum,
        specialDetails

         

     }
     axios.post("http://localhost:5000/room/add",newRoom).then(()=>{
         alert("Room Added")
         window.location = "/rooms"
         


     }).catch((err)=>{
         alert(err)
     })

    }

    const inputBoxStyle ={
        padding:"9px",width:"94%",margin:"4px",border:"1px solid rgba(194, 194, 194, 0.8)"
    }

    return(
        // <div className="container">
            
        //     <form onSubmit={sendData} >

        //         <div class="form-group">
        //             <label for="roomNo">Room Number</label> <br></br>
        //             <input type="number" id="roomNo" min="1" 
        //             placeholder="Enter Room Number" onChange={(e)=>{

        //                 setRoomNo(e.target.value);
        //             }} required/> 
                     
        //         </div>

        //         <div class="form-group">
        //             <label for="type">Room type</label>
        //             {/* <input type="text"  style={inputBoxStyle}
        //             placeholder="Enter Room type" onChange={(e)=>{

        //                 setType(e.target.value);
        //             }} required/>  */}

        //       {/* newly added code part       */}
        //         <select name="room-type" id="room-type-add" onChange={(e) => {
        //             setType(e.target.value);

        //         }} >
                   
                  

                        
        //         </select>

        //         </div>

        //         <div class="form-group">
        //             <label for="buildingNo">Building Number</label>
        //             <input type="number"  id="buildingNo" min="1" 
                    
        //             placeholder="Enter Building Number" onChange={(e)=>{

        //                 setBuildingNo(e.target.value);
        //             }} required/>

               
        //         </div>


        //         <div class="form-group">
        //             <label for="floorNum">floor Number</label>
        //             <input type="number"  id="floorNum" min="1" 
        //             placeholder="Enter floor Number" onChange={(e)=>{

        //                 setFloorNum(e.target.value);
        //             }} required/>



               
        //         </div>

        //         <div class="form-group">
        //             <label for="specialDetails">Special Details</label>
        //             <input type="text"  id="specialDetails" 
        //             placeholder="Enter Special Details" onChange={(e)=>{

        //                 setSpecialDetails(e.target.value);
        //             }} required/>

                    

               
        //         </div>




        //                 <button type="submit" class="addroom-btn">Add Room</button>
        //     </form>

        
        // </div>

        <div className="display-box">


            <div className="header-box"> Add Room
            {/* <button id="add-new-cat-btn" onClick={AddCategoryBar} style={{ display: "block" }}>Add Category</button>
                <div id="add-new-cat" style={{ display: "none" }}>  <AddCategory AddCategoryBar={AddCategoryBar} /></div> */}


            </div>

            {/* <hr /> */}
            <div className="content-box">

                <form onSubmit={sendData}>

                    <div className="form1">

                        <label className="custom-field">
                            <input type="text" className="form-input" id="name" onChange={(e) => {
                                setRoomNo(e.target.value)
                            }} required />
                            <span className="placeholder">Room Number</span>
                        </label>
                        <br />

                        

                        <label className="custom-field">
                            <textarea name="description" id="description" cols="0" rows="6" maxLength="500" onChange={(e) => {
                                 setSpecialDetails(e.target.value)
                            }}  required></textarea>
                            <span className="placeholder">Special Details</span>
                        </label>
                        <br />

                    </div>
                    <div className="form2">
                        <div className="form2-content">
                        <label className="custom-field">
                                <select name="supplier" id="supplier" onChange={(e) => {
                                    setType(e.target.value)
                                }} >
                                    <option >Select </option>
                                    
                                    <option value="Single">Single</option>
                                    <option value="Double">Double</option>
                                    <option value="Triple">Triple</option>
                                    <option value="Quad">Quad</option>
                                    <option value="">Queen</option>
                                    <option value="King">King</option>
                                    <option value="Twin">Twin</option>
                                    
                                    {
                                        // getSupplier.map(function (supplier) {
                                        //     return <option key={supplier} value={supplier}>{supplier}</option>
                                        // })
                                    }

                                </select>
                                <span className="placeholder">Type</span>
                            </label>
                        <br />

                        <label className="custom-field">
                                <input type="number" className="form-input" id="quantity" min="1"  onChange={(e) => {
                                    setBuildingNo(e.target.value)
                                }}required />
                                <span className="placeholder">Building Number</span>
                            </label>

<br/>
                            <label className="custom-field">
                                <input type="number" className="form-input" min="1"  id="restock" onChange={(e) => {
                                    setFloorNum(e.target.value)
                                }}required />
                                <span className="placeholder">floor Number</span>
                            </label>
                        <br />

                        </div>
                        <div className="form2-btn">
                            <button className="addinventory-btn">Add Room</button>
                        </div>



                    </div>

                </form>
            </div>



        </div>
    )

}
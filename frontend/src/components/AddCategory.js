import React, { useState, useEffect } from 'react';
import './AddCategory.css'
import axios from 'axios'


const AddCategory = (props) => {
    const categorybtn = props.AddCategoryBar;

    const [name, setnewcategory] = useState("");
    const [catname, setcategory] = useState("");

    const [getCategory, setgetCategory] = useState([]);




    useEffect(() => {
        axios.get("http://localhost:5000/category/").then((res) => {
            if (res.data.length > 0) {
                setgetCategory(res.data.map(category => category.name))
            }
        }).catch((e) => {
            console.log(e);
        })
    }, [sendCategory, deleteCategory])


    function sendCategory(e) {
        e.preventDefault();

        const newCat = {
            name
        }
        if (name.trim().length > 0) {
            axios.post(" http://localhost:5000/category/add", newCat).then(() => {
                setnewcategory("");

            }).catch((e) => {
                alert("error");
            })
        }




    }
    function deleteCategory(e) {
        e.preventDefault();

        axios.delete(`http://localhost:5000/category/delete/${catname}`).then(() => {
            setcategory("");
            document.getElementById('new-cat-input').setAttribute("defaultValue", "")

        }).catch((e) => {
            alert("error");
        })
    }

    return (
        <div className="category-box">

            <div className="add-category">

                <input id="new-cat-input" spellCheck="true" type="text" placeholder="Enter New Category" defaultValue=""
                    onChange={(e) => {
                        setnewcategory(e.target.value)
                    }}
                 />
                <button className="cat-btn add-cat" onClick={sendCategory}>Add</button>

            </div>


            <div className="delete-category">


                <select name="category" id="category-select-delete" onChange={(e) => {
                    setcategory(e.target.value);

                }} >
                    <option>Select</option>
                    {
                        getCategory.map(function (category) {

                            return <option key={category} value={category}>{category}</option>


                        })
                    }
                </select>
                <button onClick={deleteCategory} className="cat-btn del-cat" >Delete</button>

            </div>
            <div className="close-category">
                <i onClick={categorybtn} class="fas fa-times"></i>
            </div>

        </div>
    )




}


export default AddCategory;
import React, { useState } from 'react';
import './AddInventory.css'

export default function AddInventory() {

    return (
        <div className="display-box">

            <div className="header-box"> Add Inventory </div>
            <hr />
            <div className="content-box">
                <form action="">

                    <div className="form1">

                        <label className="custom-field">
                            <input type="text" className="form-input" id="name" />
                            <span className="placeholder">name</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="model" />
                            <span className="placeholder">model</span>
                        </label>
                        <br />

                        <label className="custom-field">
                            <input type="text" className="form-input" id="sku" />
                            <span className="placeholder">SKU</span>
                        </label>

                        <br />

                        <label className="custom-field">
                            <textarea name="description" id="description" cols="0" rows="10" maxLength="500"></textarea>
                            <span className="placeholder">description</span>
                        </label>
                        <br />

                    </div>
                    <div className="form2"> 
                    <div className="form2-content">
                    <label className="custom-field">
                            <select name="category" id="category">
                                <option value="category">Furniture</option>

                            </select>
                            <span className="placeholder">category</span>
                        </label>


                        <label className="custom-field">
                            <select name="supplier" id="supplier">
                                <option value="sup">Supplier</option>
                            </select>
                            <span className="placeholder">supplier</span>
                        </label>
                        <br />
                        <label className="custom-field">
                            <select name="unit" id="unit">
                                <option value="piece">piece</option>
                                <option value="Kg">Kg</option>
                                <option value="grams">grams</option>
                                <option value="liters">liters</option>
                            </select>
                            <span className="placeholder">unit</span>
                        </label>

                        <label className="custom-field">
                            <input type="number" className="form-input" id="quantity" />
                            <span className="placeholder">quantity</span>
                        </label>


                        <label className="custom-field">
                            <input type="number" className="form-input" id="restock" />
                            <span className="placeholder">restock level</span>
                        </label>
                        <br />
                        <div className="price">
                            <label className="custom-field">
                                <input type="number" className="form-input" id="oprice" />
                                <span className="placeholder">original price</span>
                            </label>


                            <label className="custom-field">
                                <input type="number" className="form-input" id="sprice" />
                                <span className="placeholder">selling price</span>
                            </label>


                            <label className="custom-field">
                                <input type="number" className="form-input" id="profit" />
                                <span className="placeholder">profit</span>
                            </label>
                            <br />

                        </div>



                        <label className="custom-field">
                            <input type="date" className="form-input" id="date" />
                            <span className="placeholder">date</span>
                        </label>
                    </div>
                    <div className="form2-btn">
                    <button className="addinventory-btn">Add Inventory</button>
                    </div>
                        

                       
                    </div>
                    
                </form>
            </div>



        </div>
    )

}
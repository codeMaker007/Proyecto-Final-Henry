import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"; 
import { getbrand } from '../../redux/actions/productsA';

export default function SearchBar(){
    const dispatch = useDispatch()
    const [brand, setBrand] = useState ("")
  

    function handleInputChange (e){
    e.preventDefault()
    setBrand(e.target.value)

    }
    //boton
    function handleSubmit(e){
    e.preventDefault();

        if(brand !== ""){
        dispatch(getbrand(brand));
        setName("");
    }

        else{
        alert("Ingrese una marca")
        }
    }

    return (
       

        <div>
            <form onSubmit={handleSubmit}>
            <div >
            
            <input
            type="text"
            placeholder="Escriba una marca."
            onChange = {(e) => handleInputChange (e)}
            value={brand}
            />
            
            <button  type='submit' onClick={handleSubmit}>Buscar</button>
            </div></form>
        </div>
    )
    }
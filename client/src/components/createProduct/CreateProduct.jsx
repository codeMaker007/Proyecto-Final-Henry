import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { postProducto} from "../../redux/actions/createProductA";
import { useDispatch} from 'react-redux';
import style from "./CreateProduct.module.css";


export default function CreateProduct(){

    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    const[input, setInput] = useState({
        name: "", image: "", price: "", description: "", stock: "", categories: "",
    })

    function validate(input){
        let errors = {};

        if(!input.name || !/^[a-z]+[A-Za-z0-9\s]+$/g.test(input.name)){ //como hacer desde el validate para que la primera sea mayuscula??
            errors.name = 'Al menos dos caracteres el primero, letra minúscula.';
        }
        if(!input.image){
            errors.image = 'Coloca una imagen al producto.';
        }
        
        if(!input.price || !/^[1-9]\d*(\.\d+)?$/.test(input.price)){ //como llega el precio??
            errors.price = 'Coloca un precio al producto mayor a 0.';
        }
        if(!input.description ){ 
            errors.description = 'Coloca una descripción al producto.';
        }
        // if(!input.categories){ 
        //     errors.categories = 'Coloca una categoria al producto.';
        // }
        if(!input.stock  || !/^[0-9]\d*(\.\d+)?$/.test(input.stock) ){ //se puede poner stock de cero??
            errors.stock = 'Coloca un numero, cero o más.';
        }
            
        return errors

    }

    function handleSubmit(e){
        e.preventDefault()
        if (input.name.length >1
        && !errors.hasOwnProperty("name") //devuelve un buleano si el objeto tiene la propiedad especificada 
        && !errors.hasOwnProperty("image")
        && !errors.hasOwnProperty("price")
        && !errors.hasOwnProperty("description")
        && input.categories !== "All"
        && input.categories
        && !errors.hasOwnProperty("stock")
        )

        {dispatch (postProducto(input))
        alert ("Producto creado con exito")
        setInput({
            name: "",
            image: "",
            price: "",
            description: "",
            categories: "",
            stock: "",
        })
    }
    else{
        alert ("Debe compeltar correctamente todos los campo con asteriscos (*)")
         
    }
    }


    function handleChange(e){
        e.preventDefault ();
        setInput({
        ...input,
        [e.target.name] : e.target.value,
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
    
        }));console.log (input)
    }
    

      function handleCheck (e){
        if (e.target.value === "All"){
            setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        
            }));console.log (input)
        } 
        
       else { 
        setInput({
                ...input,
                categories:  e.target.value 
            })
        } 
    }

    return(
        <div>
                      
            <form className ={style.contenedor} onSubmit = {(e)=>handleSubmit(e)} >
        <div>
                <input
                placeholder="Nombre del Producto: (*)"
                autoComplete="off"
                type = "text"
                value = {input.name}
                name = "name"
                onChange ={(e)=>handleChange(e)} 
                /> 
                {errors.name && (<p className ={style.error}>{errors.name}</p>)}
        </div>
        <div><br/>
                <input type="text" 
                value={input.image} 
                autoComplete="off"
                name='image' 
                placeholder="Imagen del producto: (*)" 
                onChange={(e)=>handleChange(e)} />
                 {errors.image && (<p className ={style.error}>{errors.image}</p>)} 
        </div> 

        <div><br/>                            
                <input  
                autoComplete="off"  
                type="number" 
                value={input.price} 
                name='price' 
                placeholder="Precio del producto: (*)"  
                onChange={(e)=>handleChange(e)} 
                /> 
                {errors.price && (<p className ={style.error}>{errors.price}</p>)}
        </div>

        <div><br/> 
                <input
                placeholder="Descripción del Producto: (*)"
                autoComplete="off"
                type = "text"
                value = {input.description}
                name = "description"
                onChange ={(e)=>handleChange(e)} 
                /> 
                {errors.description && (<p className ={style.error}>{errors.description}</p>)}
        </div>

        <div><br/> 
            <input  
            autoComplete="off"  
            type="number" 
            value={input.stock} 
            name='stock' 
            placeholder="Stock del producto: (*)"  
            onChange={(e)=>handleChange(e)} 
            />
             {errors.stock && (<p className ={style.error}>{errors.stock}</p>)}<br/>
        </div>
                
            <br/>
            

            <select onChange={e =>handleCheck(e)} className={style.categorias} >
            
                    <option value ="All">Elige una categoria</option>
                    
                    <option value ="Auriculares">Auriculares</option>
                    <option value = "Fuente de alimentación">Fuente de alimentación</option> 
                    <option value = "Gabinete">Gabinete</option>
                    <option value = "HDD">HDD</option>
                    <option value = "Micro-procesador">Micro-procesador</option> 
                        
                    <option value = "Micrófono">Micrófono</option>  
                    <option value = "Monitor">Monitor</option>  
                    <option value = "MotherBoard">MotherBoard</option>  
                    <option value = "Mouse">Mouse</option>  
                    <option value = "Mousepad">Mousepad</option> 

                    <option value = "M.2NVme">M.2NVme</option>  
                    <option value = "Parlante">Parlante</option>  
                    <option value = "Placa de video">Placa de video</option>  
                    <option value = "RAM">RAM</option>  
                    <option value = "Refrigeración">Refrigeración</option>
                                   
                    <option value = "Sillas">Sillas</option>  
                    <option value = "SSD">SSD</option>  
                    <option value = "Teclados">Teclados</option>  
                    <option value = "Webcam">Webcam</option>  
                     
                     
            {errors.categories && (<p className ={style.error}><p className = "error" >{errors.categories}</p></p>)}        
            </select> <br/> <br/>



        <button className={style.boton1} type='submit'>Crear Producto</button>
            
        <Link to= "/"><button className={style.volver}>Volver</button></Link>
        </form>
        </div>
    )


 

}

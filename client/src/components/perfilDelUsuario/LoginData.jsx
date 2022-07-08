import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { UpdateUserA } from '../../redux/actions/DashboardUpdateUserA'; //   UpdateProductR.UpdateProduct
import {useLocation,  useNavigate, useParams} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export default function LoginData() {
 
    const navigate = useNavigate ()
    const dispatch = useDispatch()

    
    const {user, isAuthenticated, isLoading} = useAuth0()
    const allUser = useSelector ((state) => state.DashboardUsersR.allUsers); 

    
    const usuario = allUser.find  (u =>u.email === user?.email)
   

    const id = usuario?.id
  
    const location = useLocation()
    let idd = (location.pathname.substring(11,location.pathname.length)) 
       
    let [state, setState] = useState(false);
    const [input, setInput] = useState({ name: "", username: "", dni: "", celphone:  "", picture: "" })
  
    useEffect(()=>(setInput({
      name: usuario?.name,
      username: usuario?.username,
      dni: usuario?.dni,
      celphone: usuario?.celphone,
      picture: usuario?.picture,
    })),[]
    )
 
    function handleSubmit(e) {
        e.preventDefault()
          if(input.name !== usuario?.name
          || input.dni !== usuario?.dni
          || input.picture !== usuario?.picture
          || input.celphone !== usuario?.celphone
          || input.username !== usuario?.username

       ){
          dispatch(UpdateUserA(id, input))
          alert ("Cambios realizados con exito")
          navigate('/')}
      else {
          alert ("Debe modificar algún campo")
      }
      
    }

    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }



    if (idd == id){
     return (
        <div>

            <form  onSubmit={(e) => handleSubmit(e)} >
            
                <div >
                    <label htmlFor="name" >{usuario.name? "Nombre: " + usuario.name : "Ingrese un nombre:"} </label>
                    <br />
                    <input 
                      autoComplete="off"
                      value={input.name}
                      onChange={(e) => handleChange(e)}
                      type="text" 
                      name="name"
                      placeholder= {usuario.name? "Modificar el nombre" : "Ingrese un nombre"}
                      // id="name"
                        />
                </div>

                <div >
                    <label htmlFor="dni" >{usuario.dni? "DNI: " + usuario.dni : "Ingrese un DNI:"} </label>
                    <br />
                    <input
                      autoComplete="off"
                      value={input.dni}
                      onChange={(e) => handleChange(e)}                      
                      type="text" name="dni"
                      placeholder= {usuario.dni? "Modificar el DNI" : "Ingrese un DNI"}
                      // id="name"
                        />
                </div>
                <div >
                    <label htmlFor="celphone" >{usuario.celphone? "Telefono: " + usuario.celphone : "Ingrese un telefono:"} </label>
                    <br />
                    <input
                      autoComplete="off"
                      value={input.celphone}
                      onChange={(e) => handleChange(e)}                        
                      type="text" name="celphone"
                      placeholder= {usuario.celphone? "Modificar el telefono" : "Ingrese un telefono"}
                      // id="name"
                        />
                </div>

                <div >
                    <label htmlFor="username" >{usuario.username? "Usuario: " + usuario.username : "Ingrese un usuario:"} </label>
                    <br />
                    <input
                      autoComplete="off"
                      value={input.username}
                      onChange={(e) => handleChange(e)}                      
                      type="text" name="username"
                      placeholder= {usuario.username? "Modificar el usuario" : "Ingrese un usuario"}
                      // id="name"
                        />
                </div>

                <div >
                    <label htmlFor="picture" > <img src={usuario.picture} alt= "Ingrese foto"/>   </label>
                    <br />
                    <input
                      autoComplete="off"
                      value={input.picture}
                      onChange={(e) => handleChange(e)}                        
                      type="text" 
                      name="picture"
                      placeholder= {usuario.picture? "Modificar el foto" : "Ingrese un foto"}
                      // id="picture"
                        />
                </div>

                
               <button  type='submit'>Modificar datos</button>
                <br />
              
            </form>
        </div>
    )

} else 
{return <p>No puedes modificar estos datos</p>}






}




















// import React from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import {useDispatch, useSelector} from "react-redux";
// import {useState, useEffect} from "react";
// import { UpdateUserA } from '../../redux/actions/DashboardUpdateUserA'; ////
// import {Formik, Form, Field} from 'formik'
// import  './assets/Loguin.css';
// import { useAuth0 } from "@auth0/auth0-react";



// export default function UpdateLoguin() {
// const navigate = useNavigate ()
// const dispatch = useDispatch()

// const {user, isAuthenticated, isLoading} = useAuth0()
// const allUser = useSelector ((state) => state.DashboardUsersR.allUsers); 

// const usuario = allUser.find  (u =>u.email === user.email) 
// const id = usuario.id


// let [state, setState] = useState(false);
// const [input, setInput] = useState({ name: "", username: "", dni: "", celphone:  "", picture: "" })



// const handleSubmit = (e) => {
//     e.preventDefault();
//     setState(state = true)
// }



// return (
//   <div className="div-container-form">
//     <Formik
//       initialValues={{  }}
      
//       onSubmit={async (input, {resetForm}) => {
            
//         if(input.name
//         || input.dni
//         || input.picture
//         || input.celphone
//         || input.username

//       ){
//           dispatch(UpdateUserA(id, input))
//           alert ("Cambios realizados con exito")
//           navigate('/')}
//         else {
//           alert ("Debe modificar algún campo")
//         }
//       }}
//     >
//           <Form >
//               {
                
//                 <div className="form">
//                   <div className="form-grup">
//                       <label htmlFor="name" className="form-label">{usuario.name? "Nombre: " + usuario.name : "Ingrese un nombre:"} </label>
//                       <div className="form-input-grup">
//                           <Field className="form-input"
//                                   type="text" name="name"
//                                   placeholder= {usuario.name? "Modificar el nombre" : "Ingrese un nombre"}
//                                   id="name"
//                           />
//                   </div>
                      
//                 </div>
                          
//                     <div className="form-grup">
//                         <label value={input.dni} htmlFor="dni" className="form-label">{usuario.dni? "DNI: " + usuario.dni : "Ingrese un DNI:"} </label>
//                         <div className="form-input-grup">
//                             <Field className="form-input"
//                               type="text"
//                               name="dni"
//                               value={setInput.dni}
//                               placeholder= {usuario.dni? "Modificar un DNI" : "Ingrese un DNI"}
//                               id="dni"
//                             />
//                     </div>
                      
//                     </div>
                    
//                     <div className="form-grup">
//                         <label htmlFor="picture" className="form-label" >  <img src={usuario.picture} alt= "" className = "foto"/>   </label>
//                         <div className="form-input-grup">
//                             <Field className="form-input"
//                               type="text"
//                               name="picture"
//                               placeholder= {usuario.picture? <p>Ingrese url</p> : <h2>Ingrese url</h2>}
//                               id="picture"
//                             />
//                     </div>
                      
//                     </div>
//                     <div className="form-grup">
//                         <label value={input.celphone} htmlFor="celphone" className="form-label">Telefono: </label>
//                         <div className="form-input-grup">
//                             <Field className="form-input"
//                               type="text"
//                               name="celphone"
//                               value={setInput.celphone}
//                           //    placeholder= {usuario.celphone? usuario.celphone :"Ingrese telefono"}
//                               id="celphone"
//                             />
//                     </div>
                      
//                     </div>
//                     <div className="form-grup">
//                         <label htmlFor="username" className="form-label">Usuario: </label>
//                         <div className="form-input-grup">
//                             <Field className="form-input"
//                               type="text"
//                               name="username"
//                               placeholder= {usuario.username? usuario.username :"Ingrese username"}
//                               id="username"
//                             />
//                     </div>
                            
//                           </div>
                          
//                           <div className="div-btn-reg"> 
//                               <button className="btn-registrar" type="submit">Modificar datos</button><br/><br/>
//                               <Link to= "/profile"><button className="btn-registrar" type="submit">Volver</button></Link>
//                           </div>
//                       </div> 
//               }
//           </Form>

//         </Formik>
//     </div>
//   );
//   };

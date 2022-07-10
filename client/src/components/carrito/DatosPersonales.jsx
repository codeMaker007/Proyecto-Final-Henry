import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { UpdateUserA } from '../../redux/actions/DashboardUpdateUserA'; //   UpdateProductR.UpdateProduct
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export default function LoginData() {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const { user } = useAuth0()
    const allUser = useSelector((state) => state.DashboardUsersR.allUsers);


    const usuario = allUser.find(u => u.email === user?.email)
    const id = usuario?.id
    console.log("id", id)

    const location = useLocation()
    let idd = (location.pathname.substring(11, location.pathname.length))
    console.log("idd", idd)

    const [input, setInput] = useState({ name: "", lastname: "", username: "", dni: "", celphone: "", picture: "", caracteristica: "" })

    useEffect(() => (setInput({
        name: usuario?.name,
        username: usuario?.username,
        dni: usuario?.dni,
        celphone: usuario?.celphone,
        picture: usuario?.picture,
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })), []
    )

    function handleSubmit(e) {
        e.preventDefault()
        if (input.name !== usuario?.name
            || input.dni !== usuario?.dni
            || input.picture !== usuario?.picture
            || input.celphone !== usuario?.celphone
            || input.username !== usuario?.username

        ) {
            dispatch(UpdateUserA(id, input))
            alert("Cambios realizados con exito")
            navigate('/')
        }
        else {
            alert("Debe modificar algún campo")
        }

    }

    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div style={{ width: '100%', display: 'flex', marginLeft: 40 }}>
            <form onSubmit={(e) => handleSubmit(e)} >
                <Box sx={{ '& .MuiTextField-root': { m: 1, width: '60ch', color: "white" }, width: '62ch', my: "5%", mx: "35%", maxWidth: "100%", bgcolor: 'white', borderRadius: "10px" }}>
                    <div >
                        <div sx={{ display: 'flex' }}>
                            <TextField
                                id="outlined-helperText"
                                label='Nombre'
                                htmlFor="name"
                                value={input.name}
                                name="name"
                                onChange={(e) => handleChange(e)}
                                defaultValue={usuario.name ? "" : "Ingrese un nombre"}
                                helperText=""
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-helperText"
                                label='Apellido'
                                htmlFor="lastName"
                                value={input.lastname}
                                name="lastname"
                                onChange={(e) => handleChange(e)}
                                defaultValue=''
                                helperText=""
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <TextField
                                id="outlined-number"
                                label="Caracteristica"
                                htmlFor="caracteristica"
                                value={input.caracteristica}
                                onChange={(e) => handleChange(e)}
                                name="caracteristica"
                                defaultValue=""
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-number"
                                label="Telefono"
                                htmlFor="celphone"
                                value={input.celphone}
                                onChange={(e) => handleChange(e)}
                                name="celphone"
                                defaultValue={usuario.celphone ? "" : "Ingrese un telefono"}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-number"
                                label="DNI"
                                htmlFor="dni"
                                value={input.dni}
                                onChange={(e) => handleChange(e)}
                                name="dni"
                                type="number"
                                defaultValue={usuario.dni ? "" : "Ingrese un DNI"}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>
                </Box>
            </form>
        </div >
    );
}

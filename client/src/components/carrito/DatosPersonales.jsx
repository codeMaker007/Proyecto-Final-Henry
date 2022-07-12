import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";


export default function LoginData({ personalData, setPersonalData }) {

    const { user } = useAuth0();
    const allUser = useSelector((state) => state.DashboardUsersR.allUsers);

    const usuario = allUser.find(u => u.email === user?.email);
    // const id = usuario?.id;

    // const [input, setInput] = useState({ name: "", lastname: "", username: "", dni: "", celphone: "", picture: "", caracteristica: "" })

    useEffect(() => (setPersonalData({
        name: usuario?.name,
        username: usuario?.username,
        dni: usuario?.dni,
        celphone: usuario?.celphone,
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })), []
    )

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     if (input.name !== usuario?.name
    //         || input.dni !== usuario?.dni
    //         || input.picture !== usuario?.picture
    //         || input.celphone !== usuario?.celphone
    //         || input.username !== usuario?.username

    //     ) {
    //         dispatch(UpdateUserA(id, input))
    //         alert("Cambios realizados con exito")
    //     }
    //     else {
    //         alert("Debe modificar algún campo")
    //     }

    // }

    // function handleChange(e) {
    //     e.preventDefault();
    //     setInput({
    //         ...input,
    //         [e.target.name]: e.target.value,
    //     });
    // }

    return (
        <div style={{ width: '100%', display: 'flex', marginLeft: 40 }}>
            <form >
                <Box sx={{ '& .MuiTextField-root': { m: 1, width: '90%', color: "white" }, width: '100%', my: "5%", mx: "35%", maxWidth: "100%", bgcolor: 'white', borderRadius: "10px" }}>
                    <div >
                        <div sx={{ display: 'flex' }}>
                            <TextField
                                id="outlined-helperText"
                                label='Nombre y apellido'
                                htmlFor="name"
                                value={personalData.name || ''}
                                name="name"
                                onChange={(e) => setPersonalData({ ...personalData, name: e.target.value })}
                                helperText=""
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {/* <TextField
                                id="outlined-helperText"
                                label='Apellido'
                                htmlFor="lastName"
                                value={personalData.lastname || ''}
                                name="lastname"
                                onChange={(e) => setPersonalData({ ...personalData, lastName: e.target.value })}
                                helperText=""
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /> */}
                            <div>
                                <TextField
                                    id="outlined-number"
                                    label="DNI"
                                    htmlFor="dni"
                                    value={personalData.dni || 0}
                                    onChange={(e) => setPersonalData({ ...personalData, dni: e.target.value })}
                                    name="dni"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <TextField
                                id="outlined-number"
                                label="Caracteristica"
                                htmlFor="caracteristica"
                                value={personalData.caracteristica || 0}
                                onChange={(e) => setPersonalData({ ...personalData, caracteristica: e.target.value })}
                                name="caracteristica"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-number"
                                label="Telefono"
                                htmlFor="celphone"
                                value={personalData.celphone || 0}
                                onChange={(e) => setPersonalData({ ...personalData, celphone: e.target.value })}
                                name="celphone"
                                type="number"
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

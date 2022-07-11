import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { userAddressesA } from '../../redux/actions/userAddressesA'; //   UpdateProductR.UpdateProduct
// import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export default function LoginData({ adress, addressData, setAddressData }) {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useAuth0();
    const allUser = useSelector((state) => state.DashboardUsersR.allUsers);

    const usuario = allUser.find(u => u.email === user?.email);
    const id = usuario?.id;

    // const [input, setInput] = useState({ street: "", number: "", zipCode: "", province: "", location: "", apartment: "", description: "" });

    useEffect(() => {
        dispatch(userAddressesA(id));
        setAddressData({
            street: adress[0]?.street,
            number: adress[0]?.number,
            zipCode: adress[0]?.zipCode,
            province: adress[0]?.province,
            location: adress[0]?.location,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
    );

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     if (input.street !== adress?.street
    //         || input.number !== adress?.number
    //         || input.zipCode !== adress?.zipCode
    //         || input.province !== adress?.province
    //         || input.location !== adress?.location

    //     ) {
    //         alert("Cambios realizados con exito")
    //         navigate('/')
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
                                label='Provincia'
                                htmlFor="name"
                                value={addressData.province}
                                onChange={(e) => setAddressData({ ...addressData, province: e.target.value })}
                                defaultValue={adress.province ? "" : "Ingrese un nombre"}
                                helperText=""
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-helperText"
                                label='Ciudad'
                                htmlFor="lastName"
                                value={addressData.location}
                                onChange={(e) => setAddressData({ ...addressData, location: e.target.value })}
                                defaultValue=''
                                helperText=""
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-number"
                                label="Calle"
                                htmlFor="calle"
                                value={addressData.street}
                                onChange={(e) => setAddressData({ ...addressData, street: e.target.value })}
                                defaultValue={adress.street ? "" : "Ingrese un DNI"}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <TextField
                                id="outlined-number"
                                label="Codigo postal"
                                htmlFor="caracteristica"
                                value={addressData.zipCode}
                                onChange={(e) => setAddressData({ ...addressData, zipCode: e.target.value })}
                                name="caracteristica"
                                defaultValue=""
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-number"
                                label="N° Calle"
                                htmlFor="number"
                                value={addressData.number}
                                onChange={(e) => setAddressData({ ...addressData, number: e.target.value })}
                                defaultValue={adress.number ? "" : "Ingrese un telefono"}
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

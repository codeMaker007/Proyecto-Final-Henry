import { updateAddress } from '../../redux/actions/userAddressesA';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import style from "./UpdateAddress.module.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useSnackbar } from 'notistack';

export default function UpdateAddress() {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()
    const { user } = useAuth0()
    const allUser = useSelector((state) => state.DashboardUsersR.allUsers);

    const usuario = user && allUser.find(u => u.email === user.email)

    const { id } = useParams()
    var userId = 0

    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();

    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        street: searchParams.get("street"),
        number: searchParams.get("number"),
        zipCode: searchParams.get("zipCode"),
        province: searchParams.get("province"),
        description: searchParams.get("description"),
        apartment: searchParams.get("apartment"),
        location: searchParams.get("location"),
        id
    })

    function validate(input) {
        let errors = {};

        if (!input.street) {
            errors.street = 'Ingresa una calle.';
        }
        if (!input.number) {
            errors.number = 'Ingresa una numeración.';
        }
        if (input.number < 0) {
            errors.number = 'Ingresa una numeración mayor a 0.';
        }
        if (!input.province) {
            errors.province = 'Ingresa una provincia.';
        }
        if (!input.zipCode) {
            errors.zipCode = 'Ingresa el código postal.';
        }
        return errors
    }


    function handleSubmit(e) {
        e.preventDefault()
        if (input.street.length > 1
            && !errors.hasOwnProperty("street") //devuelve un buleano si el objeto tiene la propiedad especificada 
            && !errors.hasOwnProperty("number")
            && !errors.hasOwnProperty("province")
            && !errors.hasOwnProperty("zipCode")
        ) {
            if (usuario) {
                userId = usuario.id
                dispatch(updateAddress(userId, input))



                enqueueSnackbar("Dirección modificada con éxito", { variant: 'success' });
                setTimeout(() => {
                    window.location.href = 'https://deployment-ruddy.vercel.app/profile'
                }, 1000);

            }
        }
        else {
            enqueueSnackbar("Debe compeltar correctamente todos los campos con asteriscos (*)", { variant: 'error' });

        }
    }


    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value

        }));

    }

    return (
        <div>{ }

            <form onSubmit={(e) => handleSubmit(e)} >

                <Box sx={{
                    '& .MuiTextField-root': { m: 1, width: '60ch', color: "white" }, width: '62ch', my: "2%", mx: "30%", maxWidth: "100%", bgcolor: '#d8d8d8', borderRadius: "10px"
                }}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '60ch', color: "white" }, maxWidth: "100%", bgcolor: '#d8d8d8', borderRadius: "10px"
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <div>
                            <div>
                                <TextField sx={{ bgcolor: '#fff ', color: '#dee2e6', borderRadius: "10px" }}
                                    id="outlined-helperText"
                                    label="Calle: "
                                    htmlFor="street"
                                    value={input.street}
                                    name="street"
                                    onChange={(e) => handleChange(e)}
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                {errors.street && (<p className={style.error}>{errors.street}</p>)}
                            </div>



                            <div>
                                <TextField sx={{ bgcolor: '#fff ', color: '#FFC400', borderRadius: "10px" }}
                                    id="outlined-helperText"
                                    label="Numeración:"
                                    htmlFor="number"
                                    value={input.number}
                                    onChange={(e) => handleChange(e)}
                                    name="number"
                                    type="number"
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                {errors.number && (<p className={style.error}>{errors.number}</p>)}
                            </div>

                            <div>
                                <TextField sx={{ bgcolor: '#fff ', color: '#FFC400', borderRadius: "10px" }}
                                    id="outlined-helperText"
                                    label="Provincia:"
                                    htmlFor="province"
                                    value={input.province}
                                    onChange={(e) => handleChange(e)}
                                    name="province"
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                {errors.province && (<p className={style.error}>{errors.province}</p>)}
                            </div>


                            <div>
                                <TextField sx={{ bgcolor: '#fff ', color: '#FFC400', borderRadius: "10px" }}
                                    id="outlined-number"
                                    label="Código postal: "
                                    htmlFor="zipCode"
                                    value={input.zipCode}
                                    onChange={(e) => handleChange(e)}
                                    name="zipCode"
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                {errors.zipCode && (<p className={style.error}>{errors.zipCode}</p>)}
                            </div>
                            <div>
                                <TextField sx={{ bgcolor: '#fff ', color: '#FFC400', borderRadius: "10px" }}
                                    id="outlined-number"
                                    label="Descripción:"
                                    htmlFor="description"
                                    value={input.price}
                                    onChange={(e) => handleChange(e)}
                                    name="description"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>


                            <div>
                                <TextField sx={{ bgcolor: '#fff ', color: '#FFC400', borderRadius: "10px" }}
                                    id="outlined-number"
                                    label="Departamento: "
                                    htmlFor="apartment"
                                    value={input.apartment}
                                    onChange={(e) => handleChange(e)}
                                    name="apartment"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>

                            <div>
                                <TextField sx={{ bgcolor: '#fff ', color: '#dee2e6', borderRadius: "10px" }}
                                    textarea
                                    id="outlined-helperText"
                                    label="Localidad: "
                                    htmlFor="location"
                                    value={input.location}
                                    name="location"
                                    onChange={(e) => handleChange(e)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>

                        </div>
                    </Box>
                    <Stack direction="row" spacing={2} >

                        <Button sx={{ m: 1, width: '70ch', color: '#022335', bgcolor: '#fff', borderColor: '#022335', borderRadius: "10px" }} type='submit' className={style.modificar} variant="outlined" startIcon={<EditIcon fontSize="large" />}>
                            Modificar dirección
                        </Button>
                    </Stack>
                    <Link to="/profile" className={style.modificar}><Stack direction="row" spacing={2} >
                        <Button sx={{ m: 1, width: '68ch', color: '#022335', bgcolor: '#fff', borderColor: '#022335', borderRadius: "10px" }} variant="outlined" startIcon={<KeyboardReturnIcon fontSize="large" />}>
                            volver
                        </Button>

                    </Stack></Link>

                </Box>
                <br />

            </form>
        </div>

    );
};



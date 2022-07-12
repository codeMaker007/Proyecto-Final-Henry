import { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux'
import style from "./AddReview.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import { postReview } from '../../redux/actions/productReviewA';

import * as React from 'react';
import Rating from '@mui/material/Rating';
import SendIcon from '@mui/icons-material/Send';


const AddReview = ({productId}) => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#FFC400'),
        backgroundColor: '#FFC400',
        '&:hover': {
            backgroundColor: '#FFC400',
        },
    }));

    const [input, setInput] = useState({userId: 0, productId: 0, score:0, title:'', text:''})
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()

    const {user} = useAuth0()
    const allUser = useSelector((state) => state.DashboardUsersR.allUsers);

    const usuario = user && allUser.find(u => u.email === user.email)

    useEffect(() => {
        if(usuario){
            setInput({
                userId: usuario.id,
                productId: productId
            })
        }
    }, [usuario])

    function validate(input) {
        let errors = {};

        if (!input.title) {
            errors.title = 'Ingresa un título.';
        }
        if (!input.score) {
            errors.score = 'Ingresa una puntuación.';
        }
        if(!input.text){ 
            errors.text = 'Ingresa una reseña.';
        }
        return errors
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

    function handleSubmit(e) {
        e.preventDefault()
        if (input.title.length > 1
            && !errors.hasOwnProperty("title") //devuelve un buleano si el objeto tiene la propiedad especificada 
            && !errors.hasOwnProperty("score")
            && !errors.hasOwnProperty("text")
        ) {
            if(input.userId > 0){
                console.log(input);
                dispatch(postReview(input))
                alert("Reseña creada con éxito")
                setInput({
                    title: "",
                    score: 0,
                    text: "",
                })
            } else {alert("Debes estar loggeado")}
        }
    }

  return (
    <div>

            <form  onSubmit={(e) => handleSubmit(e)} >

            <Box  sx={{
            '& .MuiTextField-root': { m: 1, width: '60ch', color: "white" },width: '62ch', my: "2%", mx: "30%", maxWidth: "100%", bgcolor:'white', borderRadius: "10px" }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '60ch', color: "white" }, maxWidth: "100%", bgcolor:'white', borderRadius: "10px" }}
          noValidate
          autoComplete="off"
        >
   
            <div>
                <Stack spacing={1}>
                    <Rating  defaultValue={2.5} precision={0.5} size="large"
                    id="outlined-helperText"
                    label="Puntuación:"
                    htmlFor="score"
                    value={input.score}
                    onChange={(e) => handleChange(e)}
                    name="score"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />
                </Stack>

                <div>

                 {errors.score && (<p className={style.error}>{errors.score}</p>)}
                </div>

                <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField 
                    id="standard-basic" 
                    label="Título" 
                    variant="standard" 
                    htmlFor="title"
                    value={input.title}
                    name="title"
                    onChange={(e) => handleChange(e)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                </Box>

                {/* <TextField sx={{ bgcolor:'#dee2e6 ', color: '#dee2e6',  borderRadius: "10px" }} */}

                 {errors.title && (<p className={style.error}>{errors.title}</p>)}
                </div>

                <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField 
                    id="standard-basic" 
                    variant="standard" 
                    label="Reseña:"
                    htmlFor="text"
                    value={input.text}
                    onChange={(e) => handleChange(e)}
                    name="text"
                    InputLabelProps={{
                      shrink: true,
                  }}
                  />
                  
                </Box>
                {/* <TextField sx={{ bgcolor:'#dee2e6 ', color: '#FFC400',  borderRadius: "10px" }} */}
                
                 {errors.text && (<p className={style.error}>{errors.text}</p>)}
                </div>
                </div>
            </Box>

            <Stack item xs={12} sm={6}>
                <Box
                    marginLeft={4}
                    marginTop={2}

                >
                    <ColorButton  sx={{ m: 1, width: '22ch'}}type='submit' endIcon={<SendIcon/>}>Agregar    </ColorButton>  
                    
                </Box>

            </Stack>

                
            </Box>
                <br />
           
        </form>
    </div>
  )
}

export default AddReview
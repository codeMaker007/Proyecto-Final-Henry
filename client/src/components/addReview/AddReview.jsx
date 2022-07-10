import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux'
import style from "./AddReview.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import { postReview } from '../../redux/actions/productReviewA';

const AddReview = ({productId}) => {

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
                <div>
                <TextField sx={{ bgcolor:'#dee2e6 ', color: '#dee2e6',  borderRadius: "10px" }}
                id="outlined-helperText"
                label="Título: "
                htmlFor="title"
                value={input.title}
                name="title"
                onChange={(e) => handleChange(e)}
                InputLabelProps={{
                  shrink: true,
              }}
                />
                 {errors.title && (<p className={style.error}>{errors.title}</p>)}
                </div>

                  

                <div>
                <TextField sx={{ bgcolor:'#dee2e6 ', color: '#FFC400',  borderRadius: "10px" }}
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
                 {errors.score && (<p className={style.error}>{errors.score}</p>)}
                </div>

                <div>
                <TextField sx={{ bgcolor:'#dee2e6 ', color: '#FFC400',  borderRadius: "10px" }}
                id="outlined-helperText"
                label="Reseña:"
                htmlFor="text"
                value={input.text}
                onChange={(e) => handleChange(e)}
                name="text"
                InputLabelProps={{
                  shrink: true,
              }}
                />
                 {errors.text && (<p className={style.error}>{errors.text}</p>)}
                </div>
                </div>
            </Box>
            <Stack direction="row" spacing={2} >

            <Button sx={{ m: 1, width: '70ch', color: '#022335', bgcolor:'#dee2e6', borderColor:'#022335',  borderRadius: "10px"}} type='submit' className= {style.modificar} variant="outlined" startIcon={<EditIcon fontSize = "large"/>}>
             Agregar Reseña
            </Button>
            </Stack>
                
            </Box>
                <br />
           
        </form>
    </div>
  )
}

export default AddReview
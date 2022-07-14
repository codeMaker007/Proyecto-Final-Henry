import React from "react";
import {Link} from "react-router-dom";
import style from "./Error404.module.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 0,
    }));
    
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#FFC400'),
        borderRadius: 0,
        backgroundColor: '#FFC400',
        '&:hover': {
            backgroundColor: '#ffa800',
        },
    }));

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
export default function NotFound (){
        return (
           
        <div>
                <Grid item xs={12} sm={10.5} md={6} lg={7} xl={7}>
                        <Grid item className={style.title}>
                                
                                <Item sx={{ bgcolor: "#fff",  marginTop: 0, display: 'flex', flexDirection: 'column' }}  elevation={1}> <br />
                                        <h1 className={style.title}>No eres administrador.</h1>   
                                </Item>


                                <Img className={style.img} alt="complex" src="https://img.freepik.com/vector-gratis/ilustracion-concepto-uy-error-404-robot-roto_114360-1932.jpg?w=2000" />
                                
                                <Item sx={{ bgcolor: "#fff",  marginTop: 0, display: 'flex', flexDirection: 'column' }}  elevation={1}> <br />
                                        {/* <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><ColorButton sx={{ margin: 1, borderRadius: 1, fontSize: 15 }}>Ir al home</ColorButton></Link> */}
                                        <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}><ColorButton sx={{ margin: 1, borderRadius: 1, fontSize: 15 }}>Ver productos</ColorButton></Link>
                                </Item>

                                {/* <Item sx={{ bgcolor: "#fff",  marginTop: 0, display: 'flex', flexDirection: 'column' }}  elevation={1}> <br />
                                       
                                </Item> */}
                        </Grid>
                </Grid>
                {/* <div>
                    
                        

                </div> */}

                {/* <div >

                        <img className={style.img} src="https://img.freepik.com/vector-gratis/ilustracion-concepto-uy-error-404-robot-roto_114360-1932.jpg?w=2000" alt="404 ERROR" />

                </div>
                <div>

                <Item sx={{ bgcolor: "#fff",  marginTop: 0, display: 'flex', flexDirection: 'column' }}  elevation={1}> <br />
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><ColorButton sx={{ margin: 1, borderRadius: 1, fontSize: 10 }}>Ir al home</ColorButton></Link>
                </Item>

                <Item sx={{ bgcolor: "#fff",  marginTop: 0, display: 'flex', flexDirection: 'column' }}  elevation={1}> <br />
                        <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}><ColorButton sx={{ margin: 1, borderRadius: 1, fontSize: 10 }}>Ver productos</ColorButton></Link>
                </Item>
   
                        
            
                </div> */}
        </div>

            
)
}


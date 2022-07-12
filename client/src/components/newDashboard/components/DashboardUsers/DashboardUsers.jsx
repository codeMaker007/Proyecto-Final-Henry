import React, { Fragment, useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import  {DashboardUsersA}  from '../../../../redux/actions/DashboardUsersA';
import { UpdateUserA } from '../../../../redux/actions/DashboardUpdateUserA';
import CardUsuario from '../../../dashboard/CardUsuario';
import UpdateAdmin from '../../../dashboard/UpdateAdmin';
import UpdateBanned from '../../../dashboard/UpdateBanned';
import style from '../../../dashboard/assets/Dashboard.module.css';
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  Loading  from '../../../loading/Loading';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
     
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


export default function DashboardUsers() {

    const dispatch = useDispatch()
    const allUser = useSelector ((state) => state.DashboardUsersR.allUsers);
    console.log("usuario", allUser)
    const { user, isAuthenticated } = useAuth0();
    let findedUser;
    if (isAuthenticated) {
        findedUser = allUser.find(e => e.email === user.email)
    }
       
    useEffect(()=>{
        dispatch (DashboardUsersA())
    },[dispatch]) 


    const [isShown, setIsShown] = useState(false);
    const [buttIndex, setButtIndex] = useState(null);
    const [admin, setAdmin] = useState({isAdmin: false});
    const [banned, setBanned] = useState({banned: false});

    const handleChangeAdmin = (event) => {
        dispatch(UpdateUserA(event.target.name, {isAdmin: event.target.value}))//////
        alert("Usuario modificado")
    };

    const handleChangeBanned = (event) => {
        dispatch(UpdateUserA(event.target.name, {banned: event.target.value}))//////
        alert("Usuario modificado")
      };
   
    const handleClick = event => {
        event.preventDefault();
        setIsShown(current => !current);
        setButtIndex(Number(event.target.id))

    };

    return (
        <>

{
    (isAuthenticated && findedUser?.isAdmin)?
    <div>
    <TableContainer component={Paper} sx={{ mt: 2,}}>
      <Table sx={{ minWidth: 700, bgcolor: "#e5e5e5", color: "#3a0ca3" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Usuario</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Telefono</StyledTableCell>
            <StyledTableCell align="right">Administrador</StyledTableCell>
            <StyledTableCell align="right">Bloqueado</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {allUser[0]? allUser.map((u, index) => 
            <StyledTableRow key={index}>
                <StyledTableCell align="right">{u.id}</StyledTableCell>
                <StyledTableCell align="right">{u.name}</StyledTableCell>
                <StyledTableCell align="right">{u.username}</StyledTableCell>
                <StyledTableCell align="right">{u.email}</StyledTableCell>
                <StyledTableCell align="right">{u.celphone? u.celphone : 'No registrado'}</StyledTableCell>
                <StyledTableCell align="right">
                    <Box sx={{ minWidth: 10 }}>
                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                            <InputLabel id="demo-simple-select-label">{(u.isAdmin === true)? 'Si' : 'No'} </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={admin}
                                    name={u.id}
                                    label="Admin"
                                    onChange={handleChangeAdmin}
                                    >
                                    <MenuItem value={true} >Si</MenuItem>
                                    <MenuItem value={false} >No</MenuItem>
                                </Select>
                        </FormControl>
                    </Box>
                </StyledTableCell>
                <StyledTableCell align="right">
                    <Box sx={{ minWidth: 10 }}>
                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                            <InputLabel id="demo-simple-select-label">{(u.banned === true)? 'Si' : 'No'}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={banned}
                                    name={u.id}
                                    label="Banned"
                                    onChange={handleChangeBanned}
                                    >
                                    <MenuItem value={true}>Si</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                        </FormControl>
                    </Box>    
                </StyledTableCell>             
                </StyledTableRow>
          ) : <Loading/>
        }
        </TableBody>
      </Table>
;
      <Stack direction="row" spacing={2} >
      <Link to= "/dashboard" ><Button sx={{ m: 1, width: '20ch', color: '#022335', bgcolor:'#dee2e6', borderColor:'#022335',  borderRadius: "5px"}}   variant="outlined" startIcon={<KeyboardReturnIcon fontSize = "large"/>}>
        volver
      </Button></Link> 

      </Stack>
    </TableContainer>
    </div> : <h1>No eres administrador</h1>
} 

{/*         {
            (isAuthenticated && findedUser?.isAdmin)?
        <div>
                     
            <div>    
            {allUser.map(e => {

                return(
                    <Fragment >
                    <CardUsuario
                        id={e.id}
                        key={e.id}
                        username={e.username}
                        name={e.name}
                        email = {e.email === null? "No registrado" : e.email}
                        celphone = {e.email === null? "No registrado" : e.celphone}
                        isAdmin = {e.isAdmin === true? "Si. " : "No. "}
                        banned = {e.banned === true? "Si. " : "No. "}
                         
                        
                    />
                       
                    
                        <button id={1} onClick={handleClick} className={style.btn}>Hacer administrador</button>
                            {isShown && buttIndex === 1 &&  <UpdateAdmin id={e.id} /> }
                        
                        <button id={2} onClick={handleClick} className={style.btn}>Bloquear usuario</button>
                            {isShown && buttIndex === 2 &&  <UpdateBanned id={e.id} /> }

                        
                    </Fragment>
                )
            })} 
            </div>
        </div>
        : <h1>No eres administrador</h1>
        } */}
    </>
    )
}

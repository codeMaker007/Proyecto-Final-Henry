import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Fragment, useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import  {userDetail}  from '../../redux/actions/userOrderA';
import {useLocation} from "react-router-dom";

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom'


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

    const location = useLocation()
    let id = (location.pathname.substring(13,location.pathname.length)) 

    useEffect(()=>{
        dispatch (userDetail(id))
    },[dispatch])

    const list = useSelector ((state) => state.userOrderR.listOrder);
    console.log("usuario", list)

  
    
  return (

    <TableContainer component={Paper} sx={{ mt: 2,}}>
      <Table sx={{ minWidth: 700, bgcolor: "#e5e5e5", color: "#3a0ca3" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Categoria</StyledTableCell>
            <StyledTableCell align="right">Cantidad</StyledTableCell>
            <StyledTableCell align="right">Precio unitario($)</StyledTableCell>
            <StyledTableCell align="right">Descripción</StyledTableCell>
            <StyledTableCell align="right">Estado de la compra</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.items? list.items.map (i=>
            <StyledTableRow key={i.title}>
              
              <StyledTableCell align="right">{i.title}</StyledTableCell>
              <StyledTableCell align="right">{i.category_id}</StyledTableCell>
              <StyledTableCell align="right">{i.quantity}</StyledTableCell>
              <StyledTableCell align="right">{i.unit_price}</StyledTableCell>
              <StyledTableCell align="right">{i.description}</StyledTableCell>
              <StyledTableCell align="right">{list.status === "approved"? "Aprobado" : "Rechazado"}</StyledTableCell>
            </StyledTableRow>
          ) : <p>Loading...</p>
        }
        </TableBody>
      </Table>
;
      <Stack direction="row" spacing={2} >
      <Link to= "/profile" ><Button sx={{ m: 1, width: '20ch', color: '#022335', bgcolor:'#dee2e6', borderColor:'#022335',  borderRadius: "5px"}}   variant="outlined" startIcon={<KeyboardReturnIcon fontSize = "large"/>}>
        volver
      </Button></Link> 

      </Stack>
    </TableContainer>

  );
}

       
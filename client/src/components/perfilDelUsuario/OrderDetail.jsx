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
import  { userDetail }  from '../../redux/actions/userOrderA';
import {useLocation} from "react-router-dom";

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom'
import  Loading  from '../loading/Loading.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import { getAllProducts } from '../../redux/actions/productsA';

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
      dispatch (getAllProducts())
      dispatch (userDetail(id))
    },[])

    const list = useSelector ((state) => state.userOrderR.listOrder);
    console.log("usuario", list)

    const { user, isAuthenticated } = useAuth0();
    const users = useSelector((state) => state.DashboardUsersR.allUsers);
    let findedUser;
    if (isAuthenticated) {
        findedUser = users.find(e => e.email === user.email)
    }
    const allProducts = useSelector((state) => state.products.products);
    console.log(allProducts);
    let matchProduct
    
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
          
          {matchProduct = allProducts.find(p => p.name === i.title)
            console.log(allProducts);
            return (
            <StyledTableRow key={i.title}>
              
              <StyledTableCell align="right"> <Link to={`/detail/${matchProduct?.id}`}> {i.title} </Link></StyledTableCell>
              <StyledTableCell align="right">{i.category_id}</StyledTableCell>
              <StyledTableCell align="right">{i.quantity}</StyledTableCell>
              <StyledTableCell align="right">{i.unit_price}</StyledTableCell>
              <StyledTableCell align="right">{i.description}</StyledTableCell>
              <StyledTableCell align="right">{(list.status === "approved" || list.status === "APPROVED")? "Aprobado" : "Rechazado"}</StyledTableCell>
            </StyledTableRow>
            )
          }) : <Loading/>
        }
        </TableBody>
      </Table>
;
      <Stack direction="row" spacing={2} >
        {(findedUser && findedUser.isAdmin)? 
      <Link to= "/dashboard" ><Button sx={{ m: 1, width: '20ch', color: '#022335', bgcolor:'#dee2e6', borderColor:'#022335',  borderRadius: "5px"}}   variant="outlined" startIcon={<KeyboardReturnIcon fontSize = "large"/>}>
        volver
      </Button></Link>
      : 
      <Link to= "/profile" ><Button sx={{ m: 1, width: '20ch', color: '#022335', bgcolor:'#dee2e6', borderColor:'#022335',  borderRadius: "5px"}}   variant="outlined" startIcon={<KeyboardReturnIcon fontSize = "large"/>}>
      volver
    </Button></Link>
      }

      </Stack>
    </TableContainer>

  );
}

       
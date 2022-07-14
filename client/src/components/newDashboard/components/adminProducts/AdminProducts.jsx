import React from "react";
import { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminProducts } from "../../../../redux/actions/adminProductsA";
import CardAdminProducts from '../../../dashboard/CardAdminProducts';
import { Link } from "react-router-dom";
// import UpdateProduct from './UpdateProduct';
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
import Error404NotAdmin from "../../../error404/Error404NotAdmin"


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
export default function AdminProd() {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.adminProductsR.products);

    useEffect(() => {
        dispatch(adminProducts())
    }, [dispatch]);

    const { user, isAuthenticated } = useAuth0();
    const users = useSelector((state) => state.DashboardUsersR.allUsers);
    let findedUser;
    if (isAuthenticated) {
        findedUser = users.find(e => e.email === user.email)
    }




    return (
        <div>
        
        {
    (isAuthenticated && findedUser?.isAdmin)?
    <div>

    <TableContainer component={Paper} sx={{ mt: 2,}}>
      <Table sx={{ minWidth: 700, bgcolor: "#e5e5e5", color: "#3a0ca3" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Precio</StyledTableCell>
            <StyledTableCell align="right">Stock</StyledTableCell>
            <StyledTableCell align="right">Descuento</StyledTableCell>
            <StyledTableCell align="right">Cantidad Vendida</StyledTableCell>
            <StyledTableCell align="right">Categoria</StyledTableCell>
            <StyledTableCell align="right">Envio Gratis</StyledTableCell>
            <StyledTableCell align="right">Marca</StyledTableCell>
            <StyledTableCell align="right">Descripción</StyledTableCell>
            <StyledTableCell align="right">Activado/Desactivado</StyledTableCell>
            <StyledTableCell align="right">Modificar Producto</StyledTableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
        {product[0]? product.map((p , index) => 
            <StyledTableRow key={index}>
                <StyledTableCell align="right">{p.id}</StyledTableCell>
                <StyledTableCell align="right">{p.name}</StyledTableCell>
                <StyledTableCell align="right">{p.price}</StyledTableCell>
                <StyledTableCell align="right">{p.stock}</StyledTableCell>
                <StyledTableCell align="right">{p.discount}</StyledTableCell>
                <StyledTableCell align="right">{p.amountSold}</StyledTableCell>
                <StyledTableCell align="right">{p.categories}</StyledTableCell>
                <StyledTableCell align="right">{p.freeShipping? 'Si' : 'No'}</StyledTableCell>
                <StyledTableCell align="right">{p.brand}</StyledTableCell>
                <StyledTableCell align="right">{p.description}</StyledTableCell>
                <StyledTableCell align="right">{p.disabled? 'Desactivado' : 'Activado'}</StyledTableCell>
                <StyledTableCell align="right"><Link to = {"/up/" + p.id}> <Button sx={{ width: '20ch', color: '#022335', bgcolor:'#dee2e6', borderColor:'#022335',  borderRadius: "5px"}}   variant="outlined" startIcon={<KeyboardReturnIcon fontSize = "large"/>}>
                Modificar Producto
                </Button> </Link>
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
    </div> : <Error404NotAdmin/>
}      
        
{/*             <div>
                {product[0]? product.map(e => {

                    return (
                        <Fragment >
                            <CardAdminProducts
                                id={e.id}
                                key={e.id}
                                name={e.name}
                                price={e.price}
                                stock={e.stock}
                                discount={e.discount}
                                amountSold={e.amountSold}
                                categories={e.categories}
                                freeShipping={e.freeShipping}
                                brand={e.brand}
                                description={e.description}
                                disabled={e.disabled}

                            />
                             <UpdateProduct /> 
                            <Link to={"/up/" + p.id}>Modificar producto</Link>

                        </Fragment>
                    )
                }): <p>No hay productos disponibles</p>}
            </div> */}
            </div>
    )
}


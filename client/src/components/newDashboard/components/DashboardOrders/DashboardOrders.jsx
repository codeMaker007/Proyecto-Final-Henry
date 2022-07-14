import React, { useEffect } from 'react'
import { adminOrders } from '../../../../redux/actions/adminOrdersA'
import { useDispatch, useSelector } from 'react-redux'
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
  

const DashboardOrders = () => {

    const dispatch = useDispatch()

    const allOrders = useSelector ((state) => state.adminOrdersR.adminOrders)
    useEffect(()=>{
        dispatch(adminOrders())
    },[dispatch]) 
    console.log(allOrders);

    const { user, isAuthenticated } = useAuth0();
    const users = useSelector((state) => state.DashboardUsersR.allUsers);
    let findedUser;
    if (isAuthenticated) {
        findedUser = users.find(e => e.email === user.email)
    }

  return (
    <>
    {
    (isAuthenticated && findedUser?.isAdmin)?
    <div>
    <TableContainer component={Paper} sx={{ mt: 2,}}>
      <Table sx={{ minWidth: 700, bgcolor: "#e5e5e5", color: "#3a0ca3" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Estado de la compra</StyledTableCell>
            <StyledTableCell align="right">Identificador de orden</StyledTableCell>
            <StyledTableCell align="right">Email del comprador</StyledTableCell>
            <StyledTableCell align="right">Detalles</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {allOrders[0]? allOrders.map((o, index) => 
            <StyledTableRow key={index}>
                <StyledTableCell align="right">{((o.payment_status === 'approved' || o.payment_status === 'APPROVED'))? 'Aprobada'  : 'Rechazada'}</StyledTableCell>
                <StyledTableCell align="right">{o.payment_status === 'approved' ? o.merchant_order_id : o.merchant_id }</StyledTableCell>
                <StyledTableCell align="right">{o.Users[0].email}</StyledTableCell>
                <StyledTableCell align="right">
                <Button sx={{ m: 1, width: '20ch', color: '#022335', bgcolor:'#dee2e6', borderColor:'#022335',  borderRadius: "5px"}}   variant="outlined" startIcon={<KeyboardReturnIcon fontSize = "large"/>}>
                {(o.payment_status === 'approved')? <Link  to = {"/orderDetail/" + o.merchant_order_id}> Ver detalles </Link> : <Link  to = {"/orderDetailPP/" + o.merchant_id}> Ver detalles </Link>}
                 </Button>
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
    </div>  : <Error404NotAdmin/>
} 
    </>
  )
}

export default DashboardOrders
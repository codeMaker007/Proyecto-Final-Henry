import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { DashboardUsersA, filterAdmin, filterBanned } from '../../../../redux/actions/DashboardUsersA';
import { UpdateUserA } from '../../../../redux/actions/DashboardUpdateUserA';
import CardUsuario from '../../../dashboard/CardUsuario';
import UpdateAdmin from '../../../dashboard/UpdateAdmin';
import UpdateBanned from '../../../dashboard/UpdateBanned';
import style from '../../assets/Dashboard.module.css';
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
import Loading from '../../../loading/Loading';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Error404NotAdmin from "../../../error404/Error404NotAdmin"

////////////
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { useSnackbar } from 'notistack';


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

    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const allUser = useSelector((state) => state.DashboardUsersR.allUsers);
    const userAdmin = useSelector((state) => state.DashboardUsersR.usersAdmin);
    const userBanned = useSelector((state) => state.DashboardUsersR.usersBanned);

    const { user, isAuthenticated } = useAuth0();
    let findedUser;
    if (isAuthenticated) {
        findedUser = allUser.find(e => e.email === user.email)
    }

    useEffect(() => {
        dispatch(DashboardUsersA())
        dispatch(filterAdmin())
        dispatch(filterBanned())
    }, [dispatch])


    const [isShown, setIsShown] = useState(false);
    const [buttIndex, setButtIndex] = useState(null);
    const [admin, setAdmin] = useState({ isAdmin: false });
    const [banned, setBanned] = useState({ banned: false });

    const handleChangeAdmin = (event) => {
        dispatch(UpdateUserA(event.target.name, { isAdmin: event.target.value }))//////
        enqueueSnackbar("Usuario modificado", { variant: 'info' });
        setTimeout(() => {
            window.location.href = 'https://deployment-ruddy.vercel.app/users'
        }, 1000);

    };

    const handleChangeBanned = (event) => {
        dispatch(UpdateUserA(event.target.name, { banned: event.target.value }))//////
        enqueueSnackbar("Usuario modificado", { variant: 'info' });
        window.location.href = 'https://deployment-ruddy.vercel.app/users'
    };

    const handleClick = event => {
        event.preventDefault();
        setIsShown(current => !current);
        setButtIndex(Number(event.target.id))

    };


    const [open, setOpen] = React.useState(false);
    const [openA, setOpenA] = React.useState(false);
    const [openB, setOpenB] = React.useState(false);
    const [openC, setOpenC] = React.useState(false);

    const handleClickk = () => {
        setOpen(!open);
    };

    const handleClickA = () => {
        setOpenA(!openA);
    };

    const handleClickB = () => {
        setOpenB(!openB);
    };

    return (
        <>

            {
                // (isAuthenticated && findedUser?.isAdmin)?
                <div>

                    <Grid container justify="center" sx={{ width: '100%', my: "5%", maxWidth: "100%" }}>
                        <List

                            sx={{ bgcolor: '#fff', borderRadius: "10px", color: "gray", mx: "auto", minWidth: "80%", width: 'auto' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader sx={{ width: '100%', maxWidth: "100%", bgcolor: '#fff ', borderRadius: "10px", color: "#FFC400 " }} component="div" id="nested-list-subheader">
                                    <div >
                                        <ListItem >

                                            <ListItemText sx={{ color: 'black', ml: 5 }} primary={<p > Tablas de los usuarios </p>} />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />


                                    </div>
                                </ListSubheader>
                            }
                        >

                            {/* <br/> */}
                            <ListItemButton onClick={handleClickk}>
                                <ListItemIcon>
                                    {/* <AccountCircleIcon  className= {style.iconos} fontSize = "large"/> */}
                                </ListItemIcon>
                                <ListItemText primary="Todos los Usuarios" />

                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <div>

                                                {/* <TableContainer component={Paper} sx={{ mt: 2,}}> */}
                                                <Table sx={{ ml: 5, minWidth: "98%", bgcolor: "#e5e5e5", color: "#3a0ca3" }} aria-label="customized table">
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
                                                        {allUser[0] ? allUser.map((u, index) =>
                                                            <StyledTableRow key={index}>
                                                                <StyledTableCell align="right">{u.id}</StyledTableCell>
                                                                <StyledTableCell align="right">{u.name}</StyledTableCell>
                                                                <StyledTableCell align="right">{u.username}</StyledTableCell>
                                                                <StyledTableCell align="right">{u.email}</StyledTableCell>
                                                                <StyledTableCell align="right">{u.celphone ? u.celphone : 'No registrado'}</StyledTableCell>
                                                                <StyledTableCell align="right">
                                                                    <Box sx={{ minWidth: 10 }}>
                                                                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                                                                            <InputLabel id="demo-simple-select-label">{(u.isAdmin === true) ? 'Si' : 'No'} </InputLabel>
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
                                                                            <InputLabel id="demo-simple-select-label">{(u.banned === true) ? 'Si' : 'No'}</InputLabel>
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
                                                        ) : <Loading />
                                                        }
                                                    </TableBody>
                                                </Table>




                                            </div>
                                        </ListItemIcon>
                                        <ListItemText primary="" />
                                    </ListItemButton>
                                </List>
                            </Collapse>





                            <ListItemButton onClick={handleClickA}>
                                <ListItemIcon>
                                    {/* <AccountCircleIcon  className= {style.iconos} fontSize = "large"/> */}
                                </ListItemIcon>
                                <ListItemText primary="Administradores" />
                                {openA ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={openA} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <div>

                                                <Table sx={{ ml: 5, minWidth: 700, bgcolor: "#e5e5e5", color: "#3a0ca3" }} aria-label="customized table">
                                                    <TableHead >
                                                        <TableRow >
                                                            <StyledTableCell align="right">id</StyledTableCell>
                                                            <StyledTableCell align="right">Nombre</StyledTableCell>
                                                            <StyledTableCell align="right">Usuario</StyledTableCell>
                                                            <StyledTableCell align="right">Email</StyledTableCell>
                                                            <StyledTableCell align="right">Telefono</StyledTableCell>
                                                            <StyledTableCell align="right">Usuarios administradores</StyledTableCell>
                                                            {/* <StyledTableCell align="right">Bloqueado</StyledTableCell> */}
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {userAdmin[0] ? userAdmin.map((u, index) =>
                                                            <StyledTableRow key={index}>
                                                                <StyledTableCell align="right">{u.id}</StyledTableCell>
                                                                <StyledTableCell align="right">{u.name}</StyledTableCell>
                                                                <StyledTableCell align="right">{u.username}</StyledTableCell>
                                                                <StyledTableCell align="right">{u.email}</StyledTableCell>
                                                                <StyledTableCell align="right">{u.celphone ? u.celphone : 'No registrado'}</StyledTableCell>
                                                                <StyledTableCell align="right">
                                                                    <Box sx={{ minWidth: 10 }}>
                                                                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                                                                            <InputLabel id="demo-simple-select-label">{(u.isAdmin === true) ? 'Si' : 'No'} </InputLabel>
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
                                                                {/* <StyledTableCell align="right">
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
                                </StyledTableCell>              */}
                                                            </StyledTableRow>
                                                        ) : <h1 className={style.h1} >No hay usuarios administradores.</h1>
                                                        }
                                                    </TableBody>
                                                </Table>

                                            </div>

                                        </ListItemIcon>
                                        <ListItemText primary="" />
                                    </ListItemButton>
                                </List>
                            </Collapse>

                            <ListItemButton onClick={handleClickB}>
                                <ListItemIcon>
                                    {/* <AccountCircleIcon  className= {style.iconos} fontSize = "large"/> */}
                                </ListItemIcon>
                                <ListItemText primary="Usuarios bloqueados" />
                                {openB ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={openB} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <div>

                                                <Table sx={{ ml: 5, minWidth: 700, bgcolor: "#e5e5e5", color: "#3a0ca3" }} aria-label="customized table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <StyledTableCell align="right">Id</StyledTableCell>
                                                            <StyledTableCell align="right">Nombre</StyledTableCell>
                                                            <StyledTableCell align="right">Usuario</StyledTableCell>
                                                            <StyledTableCell align="right">Email</StyledTableCell>
                                                            <StyledTableCell align="right">Telefono</StyledTableCell>
                                                            {/* <StyledTableCell align="right">Administrador</StyledTableCell> */}
                                                            <StyledTableCell align="right">Usuarios bloqueado</StyledTableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {userBanned[0] ? userBanned.map((u, index) =>
                                                            <StyledTableRow key={index}>
                                                                <StyledTableCell align="right">{u.id}</StyledTableCell>
                                                                <StyledTableCell align="right">{u.name}</StyledTableCell>
                                                                <StyledTableCell align="right">{u.username}</StyledTableCell>
                                                                <StyledTableCell align="right">{u.email}</StyledTableCell>
                                                                <StyledTableCell align="right">{u.celphone ? u.celphone : 'No registrado'}</StyledTableCell>
                                                                {/* <StyledTableCell align="right">
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
                                </StyledTableCell> */}
                                                                <StyledTableCell align="right">
                                                                    <Box sx={{ minWidth: 10 }}>
                                                                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                                                                            <InputLabel id="demo-simple-select-label">{(u.banned === true) ? 'Si' : 'No'}</InputLabel>
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
                                                        ) : <h1 className={style.h1}> No hay usuarios bloqueados</h1>
                                                        }
                                                    </TableBody>
                                                </Table>



                                            </div>

                                        </ListItemIcon>
                                        <ListItemText primary="" />
                                    </ListItemButton>
                                </List>
                            </Collapse>

                            <div>



                            </div>


                            <Stack direction="row" spacing={2} >
                                <Link to="/dashboard" ><Button sx={{ ml: 8, width: '20ch', color: '#022335', bgcolor: '#dee2e6', borderColor: '#022335', borderRadius: "5px" }} variant="outlined" startIcon={<KeyboardReturnIcon fontSize="large" />}>
                                    volver
                                </Button></Link>

                            </Stack>


                        </List>
                    </Grid>


                </div>
                // : <Error404NotAdmin/>
            }
        </>
    )
}

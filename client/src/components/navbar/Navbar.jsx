import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { DashboardUsersA } from '../../redux/actions/DashboardUsersA';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import FactCheckSharpIcon from '@mui/icons-material/FactCheckSharp';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import { useLocation, useNavigate } from 'react-router-dom';
import StoreSharpIcon from '@mui/icons-material/StoreSharp';
import { getProductByName } from "../../redux/actions/productName";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import Error404Banned from '../error404/Error404Banned';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFC400',
        },
        secondary: {
            main: '#3a0ca3',
        },
    },
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    height: 40,
    width: '70%',
    [theme.breakpoints.up('xs')]: {
        width: '100%',
        textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
        width: '80%',
        textAlign: 'center'
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'gray',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            marginLeft: 30
        },
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 3,
        top: 5,
        backgroundColor: '#FFC400',
        color: 'black'
    },
}));
const StyledBadge2 = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 3,
        top: 2,
        backgroundColor: '#FFC400',
        color: 'black'
    },
}));

export default function PrimarySearchAppBar() {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const [producto, setProducto] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (producto.length < 1) return enqueueSnackbar('No has ingresado nada!', { variant: 'info' });
        if (location.pathname !== '/products') {
            navigate("/products")
        }
        setTimeout(() => {
            dispatch(getProductByName(producto));
        }, 500);
        setProducto("");
    }

    function handleInputChange(e) {
        e.preventDefault();
        setProducto(e.target.value);
    }

    useEffect(() => {
        dispatch(DashboardUsersA())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const productsCart = useSelector((state) => state.carrito.productosCarrito);
    const productosFavoritos = useSelector((state) => state.favoritos.productosFavoritos);
    let number = productsCart.length;
    const users = useSelector((state) => state.DashboardUsersR.allUsers);
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    let isAdmin;
    let isBanned;
    if (isAuthenticated) {
        let findedUser = users.find(e => e.email === user.email);
        (findedUser?.isAdmin) ? isAdmin = true : isAdmin = false;
        (findedUser?.banned) ? isBanned = true : isBanned = false;
        localStorage.setItem('usuario', JSON.stringify(findedUser));
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <ThemeProvider theme={theme}>
            <Menu
                anchorEl={anchorEl}
                id={menuId}
                keepMounted
                open={isMenuOpen}
                onClose={handleMenuClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 0,
                        '& .MuiAvatar-root': {
                            // width: ,
                            // height: 30,
                            ml: 0,
                            mr: 0,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 20,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link to='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem>
                        <ListItemIcon>
                            <PermIdentitySharpIcon />
                        </ListItemIcon>
                        Perfil
                    </MenuItem>
                </Link>
                <Divider />
                {
                    (isAdmin)
                        ? <Link to='/dashboard' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <MenuItem>
                                <ListItemIcon>
                                    <FactCheckSharpIcon />
                                </ListItemIcon>
                                Dashboard
                            </MenuItem>
                        </Link>
                        : <div></div>
                }
                <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu >
        </ThemeProvider>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            id={mobileMenuId}
            keepMounted
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 0,
                    '& .MuiAvatar-root': {
                        // width: ,
                        // height: 30,
                        ml: 0,
                        mr: 0,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 20,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-40%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <Link to='/products' style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem>
                    <ListItemIcon>
                        <StoreSharpIcon />
                    </ListItemIcon>
                    Productos
                </MenuItem>
            </Link>
            <Divider />
            <Link to='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem>
                    <ListItemIcon>
                        <PermIdentitySharpIcon />
                    </ListItemIcon>
                    Perfil
                </MenuItem>
            </Link>
            <Link to='/carrito' style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem>
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    Carrito
                </MenuItem>
            </Link>
            <Link to='/favoritos' style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem>
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    Favoritos
                </MenuItem>
            </Link>
            <Divider />
            {
                (isAdmin)
                    ? <Link to='/dashboard' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem>
                            <ListItemIcon>
                                <FactCheckSharpIcon />
                            </ListItemIcon>
                            Dashboard
                        </MenuItem>
                    </Link>
                    : <div></div>
            }
            <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu >
    );

    if (isBanned) {
        navigate('/404');
        return (<></>)
    }
    if (location.pathname.substring(0, 3) === '/up') return (<></>)

    if (location.pathname.substring(0, 12) === '/orderDetail') return (<></>)
    if (location.pathname === '/dashboard') return (<></>)
    if (location.pathname === '/orders') return (<></>)
    if (location.pathname === '/adminProducts') return (<></>)
    if (location.pathname === '/createproducts') return (<></>)
    if (location.pathname === '/users') return (<></>)
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <div style={{ backgroundColor: '#3a0ca3', height: 30, display: 'flex', alignItems: 'center', borderBottom: 'solid', borderBottomWidth: 1.7, borderColor: '#495057' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={5} sm={4} md={4} lg={4} xl={4} sx={{ color: '#ced4da', fontSize: 13, textAlign: 'center', display: { xs: 'none', md: 'unset' } }}>
                            Necesitas ayuda? +54 123 456 789
                        </Grid>
                        <Grid item xs={0} sm={2.2} md={2} lg={4.9} xl={5} sx={{ color: '#ced4da', display: { xs: 'none', md: 'unset' } }}>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={1.1} xl={1} sx={{ color: '#ced4da', fontSize: 14, cursor: 'pointer', display: { xs: 'none', md: 'unset' } }}>
                            <Link to='/aboutUs' style={{ textDecoration: 'none', color: 'inherit' }}>Sobre nosotros</Link>
                        </Grid>
                        <Grid item xs={1} sm={2} md={2} lg={1} xl={1} sx={{ color: '#ced4da', fontSize: 14, cursor: 'pointer', display: { xs: 'none', md: 'unset' } }}>
                            <a href="https://api.whatsapp.com/send?phone=+5492616260059&text=Hola,%20me%20gustaría%20recibir%20asesoramiento" style={{ textDecoration: 'none', color: 'inherit' }}>Contactanos</a>

                        </Grid>
                        <Grid item xs={1} sm={2} md={2} lg={1} xl={1} sx={{ color: '#ced4da', fontSize: 14, textAlign: 'left', cursor: 'pointer', marginLeft: -2, display: { xs: 'none', md: 'unset' } }}>
                            <Link to='/faqs' style={{ textDecoration: 'none', color: 'inherit' }}>FAQs</Link>
                        </Grid>
                    </Grid>
                </div>
                <AppBar position="static" sx={{ bgcolor: '#3a0ca3', paddingTop: 1.5 }}>
                    <Toolbar >
                        <Grid container spacing={2}>
                            <Grid item xs={3} sm={5} md={1} lg={1} xl={1.5} sx={{ color: '#ced4da', fontSize: 13, textAlign: 'center', display: 'flex' }}></Grid>
                            <Grid item xs={9} sm={6} md={2} lg={2} xl={1.6} sx={{ color: '#ced4da', fontSize: 13, textAlign: 'center', display: 'flex' }}>
                                {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                                {/* <Link to='/' style={{ textDecoration: 'none' }}> */}
                                <Typography
                                    variant="h6"
                                    noWrap
                                    href='/'
                                    component="a"
                                    sx={{
                                        display: { sm: 'block' },
                                        textDecoration: 'none',
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        fontSize: 30,
                                        color: '#ced4da',
                                    }}
                                >
                                    HENTECH
                                </Typography>
                                {/* </Link> */}
                            </Grid>
                            <Grid item xs={0} sm={3} md={2} lg={2} xl={1.5} sx={{ color: 'white', fontSize: 13, marginLeft: 7, display: { xs: 'none', sm: 'none', md: 'unset' } }}>
                                <Link to='/products' style={{ textDecoration: 'none' }}>
                                    <Button key={'products'} >
                                        <div style={{ color: '#FFC400' }}>
                                            Productos
                                        </div>
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={0} sm={3.8} md={4} lg={4} xl={4} sx={{ color: '#ced4da', fontSize: 13, textAlign: 'right', display: { xs: 'flex', md: 'none' } }}></Grid>
                            <Grid item xs={9} sm={6} md={4} lg={4} xl={4} sx={{ color: '#ced4da', fontSize: 13, textAlign: 'right', display: { sm: 'unset' } }}>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <form onSubmit={(e) => handleSubmit(e)}>
                                        <StyledInputBase
                                            value={producto}
                                            onChange={(e) => handleInputChange(e)}
                                            placeholder="Buscar producto..."
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </form>
                                </Search>
                            </Grid>
                            {/* <Box sx={{ flexGrow: 1 }} /> */}
                            <Grid item xs={0} sm={1} md={2} lg={2} xl={1} sx={{ color: 'white' }}>
                                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                                    <Link to='/carrito' style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                            <StyledBadge2 badgeContent={number} color="primary">
                                                <ShoppingCartIcon sx={{ fontSize: 30 }} />
                                            </StyledBadge2>
                                        </IconButton>
                                    </Link>
                                    <IconButton
                                        size="large"
                                        aria-label=""
                                        color="inherit"
                                    >
                                        <StyledBadge badgeContent={productosFavoritos.length} color="primary">
                                            <Link to='/favoritos' style={{ textDecoration: 'none', color: 'inherit' }}> <FavoriteIcon sx={{ fontSize: 30, marginBottom: -0.5 }} /> </Link>
                                        </StyledBadge>
                                    </IconButton>
                                    {
                                        (isAuthenticated === false)
                                            ? <IconButton
                                                size="large"
                                                aria-label="account of current user"
                                                aria-controls={menuId}
                                                aria-haspopup="true"
                                                onClick={() => { loginWithRedirect() }}
                                                color="inherit"
                                            >
                                                <AccountCircle sx={{ fontSize: 30 }} />
                                            </IconButton>
                                            : <IconButton
                                                size="large"
                                                aria-label="account of current user"
                                                aria-controls={menuId}
                                                aria-haspopup="true"
                                                onClick={handleProfileMenuOpen}
                                                color="inherit"
                                            >
                                                <AccountCircle sx={{ fontSize: 30 }} />
                                            </IconButton>}
                                </Box>
                            </Grid>
                            <Grid item xs={1} sm={1} md={6} lg={2} xl={1} sx={{ color: 'white' }}>
                                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="show more"
                                        aria-controls={mobileMenuId}
                                        aria-haspopup="true"
                                        onClick={handleMobileMenuOpen}
                                        color="inherit"
                                    >
                                        <MoreIcon />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box >
        </ThemeProvider >
    );
}

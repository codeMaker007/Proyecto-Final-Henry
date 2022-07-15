import './App.css';
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import LandingPage from './components/landingPage/LandingPage';
import DetailProduct from './components/detallesDelProducto/DetallesDelProducto';
import PerfilDelUsuario from "./components/perfilDelUsuario/PerfilDelUsuario";
import Favoritos from './components/favoritos/Favoritos';
import Dashboard from './components/dashboard/Dashboard';
// import Material_UI from './components/material_UI/Material_UI';
import CarritoContainer from './components/carrito/CarritoContainer';
import UpdateProduct from './components/dashboard/UpdateProduct';
import UpdateAdmin from './components/dashboard/UpdateAdmin';
import UpdateBanned from './components/dashboard/UpdateBanned';
import LoginData from "./components/perfilDelUsuario/LoginData";
import LoginAddress from "./components/perfilDelUsuario/LoginAddress";
import Success from './components/alertas/Success';
import OrderDetail from "./components/perfilDelUsuario/OrderDetail";
import CreateAddress from './components/createAddress/CreateAddress';
import UpdateAddress from './components/updateAddress/UpdateAddress';
import { SnackbarProvider } from 'notistack';

import NewDashboard from './components/newDashboard/pages/NewDashboard'
import MainLayout from './components/newDashboard/components/layout/MainLayout'
import './components/newDashboard/assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './components/newDashboard/scss/App.scss'
import CreateProduct from './components/newDashboard/components/createProduct/CreateProduct';
import AdminProd from './components/newDashboard/components/adminProducts/AdminProducts';
import DashboardUsers from './components/newDashboard/components/DashboardUsers/DashboardUsers';
import DashboardOrders from './components/newDashboard/components/DashboardOrders/DashboardOrders';
import OrderDetailPP from './components/perfilDelUsuario/OrderDetailPP';
import Faqs from './components/faqs/Faqs';
import AboutUs from './components/aboutUs/AboutUs';
import Error404Banned from './components/error404/Error404Banned';
// import Footer from './components/footer/Footer';

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

function App() {
  return (
    <div >
      <ThemeProvider theme={theme} >
        <SnackbarProvider maxSnack={3}>
          <Navbar />
          <Routes>
            <Route path="" element={<LandingPage />} />
            <Route path="products" element={<Products />} />
            <Route path="carrito" element={<CarritoContainer />} />
            <Route path="/detail/:id" element={<DetailProduct />} />
            <Route path="/profile" element={<PerfilDelUsuario />} />
            <Route path="/favoritos" element={<Favoritos />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/material" element={<Material_UI />} /> */}
            <Route path="/up/:id" element={<UpdateProduct />} />
            <Route path="/UpdateAdmin/:id" element={<UpdateAdmin />} />
            <Route path="/UpdateBanned/:id" element={<UpdateBanned />} />
            <Route path="/LoginData/:id" element={<LoginData />} />
            <Route path="/LoginAddress/:id" element={<LoginAddress />} />
            <Route path="/success" element={<Success />} />
            <Route path="/orderDetail/:id" element={<OrderDetail />} />
            <Route path="/orderDetailPP/:id" element={<OrderDetailPP />} />
            <Route path="/createAddress" element={<CreateAddress />} />
            <Route path="/updateAddress/:id" element={<UpdateAddress />} />
            <Route path='/dashboard' element={<MainLayout />}>
              <Route index element={<NewDashboard />} />
            </Route>
            <Route path='/createproducts' element={<CreateProduct />} />
            <Route path='/adminProducts' element={<AdminProd />} />
            <Route path='/users' element={<DashboardUsers />} />
            <Route path='/orders' element={<DashboardOrders />} />
            <Route path='/faqs' element={<Faqs />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/404' element={<Error404Banned />} />
          </Routes>
          {/* <Footer /> */}
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;




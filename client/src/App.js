import './App.css';
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';

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

function App() {
  return (
    <div >
      <ThemeProvider >
        <Navbar />
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="products" element={<Products />} />
          <Route path="carrito" element={<CarritoContainer />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
          <Route path="/profile" element={<PerfilDelUsuario />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/material" element={<Material_UI />} /> */}
          <Route path="/up/:id" element={<UpdateProduct />} />
          <Route path="/UpdateAdmin/:id" element={<UpdateAdmin />} />
          <Route path="/UpdateBanned/:id" element={<UpdateBanned />} />
          <Route path="/LoginData/:id" element={<LoginData />} />
          <Route path="/LoginAddress/:id" element={<LoginAddress />} />
          <Route path="/success" element={<Success />} />
          <Route path="/orderDetail/:id" element={<OrderDetail />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;




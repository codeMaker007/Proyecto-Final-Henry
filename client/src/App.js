import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import LandingPage from './components/landingPage/LandingPage';
import DetailProduct from './components/detallesDelProducto/DetallesDelProducto';
import PerfilDelUsuario from "./components/perfilDelUsuario/PerfilDelUsuario";
import Favoritos from './components/favoritos/Favoritos';
import Dashboard from './components/dashboard/Dashboard';
import Material_UI from './components/material_UI/Material_UI';
import CarritoContainer from './components/carrito/CarritoContainer';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="products" element={<Products />} />
        <Route path="carrito" element={<CarritoContainer />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/profile" element={<PerfilDelUsuario />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/material" element={<Material_UI />} />
      </Routes>
    </div>
  );
}

export default App;



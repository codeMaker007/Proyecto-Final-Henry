import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Carrito from './components/carrito/Carrito';
import LandingPage from './components/landingPage/LandingPage';
import DetailProduct from './components/detallesDelProducto/DetallesDelProducto';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="products" element={<Products />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        {/* <Route path="login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
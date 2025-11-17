import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext/CartProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import RutaProtegida from './components/RutaProtegida';
import ProductFormContainer from './components/adminComponents/ProductFormContainer/ProductFormContainer';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route element={<MainLayout />}>
              <Route
                path='/'
                element={<ItemListContainer titulo='Bienvenidos' />}
              />
              <Route
                path='/carrito'
                element={
                  <RutaProtegida>
                    <Cart />
                  </RutaProtegida>
                }
              />
            </Route>

            <Route path='/admin' element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route
                path='/alta-productos'
                element={
                  <RutaProtegida>
                    <ProductFormContainer />
                  </RutaProtegida>
                }
              />
            </Route>
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

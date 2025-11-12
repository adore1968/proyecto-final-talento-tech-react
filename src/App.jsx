import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext/CartProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthContext/AuthProvider';
import Cart from './components/Cart/Cart';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route
                path='/'
                element={<ItemListContainer titulo='Bienvenidos' />}
              />
              <Route
                path='/carrito'
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

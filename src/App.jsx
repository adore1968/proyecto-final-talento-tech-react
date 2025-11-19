import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext/CartProvider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import RutaProtegida from "./components/RutaProtegida";
import ProductFormContainer from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route
                path="/"
                element={<ItemListContainer titulo="Bienvenidos" />}
              />
              <Route
                path="/category/:category"
                element={<ItemListContainer titulo="Bienvenidos" />}
              />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route
                path="/carrito"
                element={
                  <RutaProtegida>
                    <Cart />
                  </RutaProtegida>
                }
              />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route
                path="alta-productos"
                element={
                  <RutaProtegida>
                    <ProductFormContainer />
                  </RutaProtegida>
                }
              />
              <Route
                path="alta-productos/:id"
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

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;

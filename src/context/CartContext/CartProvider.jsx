import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };

  const addItem = (item) => {
    if (exists(item.id)) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + item.quantity };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
      alert("Agregado al carrito");
    } else {
      setCart([...cart, item]);
      alert(`${item.name} agregado`);
    }
  };

  const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
    alert("Producto eliminado");
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    // if (cart.length) {
    //   return cart.length;
    // }

    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
    return totalItems;
  };

  const total = () => {
    const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

    return Math.round(total * 100) / 100;
  };

  const checkout = () => {
    const ok = confirm("¿Desea finalizar la compra?");

    if (ok) {
      alert("¡Compra realizada con exito!");
      clearCart();
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clearCart,
        getTotalItems,
        deleteItem,
        total,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

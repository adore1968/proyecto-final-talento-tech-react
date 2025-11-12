import { useState } from 'react';
import { CartContext } from './CartContext';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getTotalItems = () => {
    if (cart.length) {
      return cart.length;
    }

    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
    return totalItems;
  };

  return (
    <CartContext.Provider value={{ getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

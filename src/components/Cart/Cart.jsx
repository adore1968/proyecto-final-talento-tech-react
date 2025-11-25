import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import Item from "../Item/item";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const { cart, clearCart, deleteItem, total, checkout } = useCartContext();
  return (
    <section className="container py-4 min-vh-100">
      <h2 className="text-center mb-4">
        <FaShoppingCart /> Carrito de compras
      </h2>

      {cart.length ? (
        cart.map((prod) => (
          <Item key={prod.id} {...prod}>
            <span className="fw-bold d-block my-2">
              Cantidad: {prod.quantity}
            </span>
            <button
              className="btn btn-danger btn-sm"
              type="button"
              onClick={() => deleteItem(prod.id)}
            >
              Eliminar
            </button>
          </Item>
        ))
      ) : (
        <div className="alert alert-info text-center">
          Tu carrito esta vacio
        </div>
      )}

      {cart.length ? (
        <div className="mt-4 d-flex flex-column align-items-center gap-3">
          <div className="card bg-dark text-light px-4 py-3 shadow">
            <p className="fs-5 m-0">Total a pagar: ${total()}</p>
          </div>

          <button className="btn btn-success btn-lg w-100" onClick={checkout}>
            Finalizar compra
          </button>

          <button className="btn btn-outline-danger w-100" onClick={clearCart}>
            VaciarCarrito
          </button>
        </div>
      ) : (
        <div className="text-center mt-3">
          <Link className="btn btn-primary" to="/">
            Volver al inicio
          </Link>
        </div>
      )}
    </section>
  );
}

export default Cart;

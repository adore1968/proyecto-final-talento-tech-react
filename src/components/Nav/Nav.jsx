import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { FaShoppingCart } from "react-icons/fa";

function Nav() {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 py-2">
      <Link to="/" className="navbar-brand">
        LOGO
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/category/salado" className="nav-link">
              Salado
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/dulce" className="nav-link">
              Dulce
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/carrito" className="nav-link">
              <FaShoppingCart />
            </Link>
          </li>
          {getTotalItems() > 0 && (
            <span className="nav-link">{getTotalItems()}</span>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

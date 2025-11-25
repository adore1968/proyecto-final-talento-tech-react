import { useCartContext } from "../../context/CartContext/useCartContext";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import Count from "../Count/Count";
import Item from "../Item/item";
import { MdEdit, MdDelete } from "react-icons/md";
import { deleteProduct } from "../../services/products";
import { showError, showSuccess } from "../../utils/toast";
import { Link, useNavigate } from "react-router-dom";

function ItemDetail({ detail }) {
  const { user } = useAuthContext();
  const { addItem } = useCartContext();

  const navigate = useNavigate();

  const handleAdd = (quantity) => {
    addItem({ ...detail, quantity });
  };

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() => {
        showSuccess("Producto eliminado");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        showError(err.message);
      });
  };

  return (
    <Item {...detail}>
      {user && (
        <div className="d-flex gap-3 mt-3 align-items-center">
          <Link
            to={`/admin/alta-productos/${detail.id}`}
            className="text-success fs-3"
          >
            <MdEdit />
          </Link>
          <button
            type="button"
            className="btn p-0 text-danger fs-3 border-0 bg-transparent"
          >
            <MdDelete onClick={() => handleDelete(detail.id)} />
          </button>
        </div>
      )}
      <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} />
    </Item>
  );
}

export default ItemDetail;

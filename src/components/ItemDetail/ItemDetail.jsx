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
        <div>
          <Link to={`/admin/alta-productos/${detail.id}`}>
            <MdEdit />
          </Link>
          <MdDelete onClick={() => handleDelete(detail.id)} />
        </div>
      )}
      <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} />
    </Item>
  );
}

export default ItemDetail;

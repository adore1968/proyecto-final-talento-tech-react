import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";

function ItemDetailContainer() {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((product) => setDetail(product))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <main className="detail-container">
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
}

export default ItemDetailContainer;

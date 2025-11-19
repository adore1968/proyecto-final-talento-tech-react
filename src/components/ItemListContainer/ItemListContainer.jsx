import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";
import { showError } from "../../utils/toast";

function ItemListContainer({ titulo }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    getProducts(category)
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
        showError(err.message);
      })
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <section>
      <h1>{titulo}</h1>
      <ItemList lista={products} />
    </section>
  );
}

export default ItemListContainer;

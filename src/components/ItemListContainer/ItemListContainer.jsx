import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";
import { showError } from "../../utils/toast";
import Loader from "../Loader";

function ItemListContainer({ titulo }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  const productosPorPagina = 6;
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    getProducts(category)
      .then((data) => {
        setProducts(data);
        setPaginaActual(1);
      })
      .catch((err) => {
        console.log(err);
        showError(err.message);
      })
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <Loader />;

  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosPaginados = products.slice(
    indicePrimerProducto,
    indiceUltimoProducto
  );

  const totalPaginas = Math.ceil(products.length / productosPorPagina);

  return (
    <section>
      <h1 className="text-center mb-4">{titulo}</h1>
      <ItemList lista={productosPaginados} />
      <div className="d-flex justify-content-center my-4">
        {Array.from({ length: totalPaginas }, (_, index) => (
          <button
            key={index + 1}
            className={`btn mx-1 ${
              paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setPaginaActual(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;

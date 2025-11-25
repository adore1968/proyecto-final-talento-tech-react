import { Link } from "react-router-dom";
import Item from "../Item/item";
import { useState } from "react";

function ItemList({ lista }) {
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = lista.filter((prod) =>
    prod.name.toLowerCase().includes(busqueda.toLowerCase())
  );
  return (
    <>
      <input
        type="text"
        placeholder="Buscar productos..."
        className="form-control mb-3"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="container">
        <div className="row g-4">
          {productosFiltrados.length ? (
            productosFiltrados.map((prod) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={prod.id}>
                <Item {...prod} />
              </div>
            ))
          ) : (
            <p>No hay productos</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ItemList;

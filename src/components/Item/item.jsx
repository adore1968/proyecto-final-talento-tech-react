import { Link, useLocation } from "react-router-dom";

function Item({ id, name, price, description, imageUrl, children }) {
  const location = useLocation();

  const isDetailPage = location.pathname.includes("/detail/");

  return (
    <div className="card bg-dark text-white h-100">
      <img src={imageUrl} alt={description} className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Precio : ${price}</p>
        <p className="fw-bold fs-5">Descripcion: {description}</p>

        {!isDetailPage && (
          <Link
            to={`/detail/${id}`}
            className="btn btn-outline-light mt-3 w-100"
          >
            Ver mas
          </Link>
        )}
        {children}
      </div>
    </div>
  );
}

export default Item;

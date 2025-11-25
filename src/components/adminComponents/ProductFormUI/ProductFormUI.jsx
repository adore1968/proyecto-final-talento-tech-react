import Loader from "../../Loader";

function ProductFormUI({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
  id,
}) {
  if (loading) {
    return <Loader />;
  }

  return (
    <section className="container d-flex align-items-center justify-content-center min-vh-100">
      <form className="p-4 shadow rounded bg-light w-100" onSubmit={onSubmit}>
        <h2 className="mb-4 text-black text-center">
          {id ? "Actualizar" : "Agregar"} Producto
        </h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={onChange}
            required
            className="form-control"
          />
          {errors.name && (
            <p className="text-danger small mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="price" className="form-label">
            Precio:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={product.price}
            onChange={onChange}
            required
            className="form-control"
          />
          {errors.price && (
            <p className="text-danger small mt-1">{errors.price}</p>
          )}
        </div>

        <div>
          <label htmlFor="category" className="form-label">
            Categoria:
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={product.category}
            onChange={onChange}
            required
            className="form-control"
          />
          {errors.category && (
            <p className="text-danger small mt-1">{errors.category}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="form-label">
            Descripcion:
          </label>
          <textarea
            name="description"
            id="description"
            value={product.description}
            onChange={onChange}
            required
            className="form-control"
          ></textarea>
          {errors.description && (
            <p className="text-danger small mt-1">{errors.description}</p>
          )}
        </div>
        <div>
          <label htmlFor="file" className="form-label">
            Imagen:
          </label>
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*"
            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
            className="form-control"
          />
          {errors.file && (
            <p className="text-danger small mt-1">{errors.file}</p>
          )}
        </div>

        <button
          className="btn btn-primary w-100"
          type="submit"
          disabled={loading}
        >
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </section>
  );
}

export default ProductFormUI;

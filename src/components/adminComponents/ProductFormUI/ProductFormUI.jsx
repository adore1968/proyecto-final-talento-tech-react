function ProductFormUI({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) {
  if (loading) {
    return (
      <div>
        <h2>Cargando...</h2>
      </div>
    );
  }

  return (
    <section>
      <form className='product-form' onSubmit={onSubmit}>
        <h2>Agregar Producto</h2>
        <div>
          <label htmlFor='name'>Nombre:</label>
          <input
            type='text'
            name='name'
            id='name'
            value={product.name}
            onChange={onChange}
            required
          />
          {errors.name && <p className='error'>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor='price'>Precio:</label>
          <input
            type='number'
            name='price'
            id='price'
            value={product.price}
            onChange={onChange}
            required
          />
          {errors.price && <p className='error'>{errors.price}</p>}
        </div>

        <div>
          <label htmlFor='category'>Categoria:</label>
          <input
            type='text'
            name='category'
            id='category'
            value={product.category}
            onChange={onChange}
            required
          />
          {errors.category && <p className='error'>{errors.category}</p>}
        </div>

        <div>
          <label htmlFor='description'>Descripcion:</label>
          <textarea
            name='description'
            id='description'
            value={product.description}
            onChange={onChange}
            required
          ></textarea>
          {errors.description && <p className='error'>{errors.description}</p>}
        </div>

        <div>
          <label htmlFor='file'>Imagen:</label>
          <input
            type='file'
            name='file'
            id='file'
            accept='image/*'
            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
          />
          {errors.file && <p className='error'>{errors.file}</p>}
        </div>

        <button className='btn' type='submit' disabled={loading}>
          {loading ? 'Guardando...' : 'Guardar'}
        </button>
      </form>
    </section>
  );
}

export default ProductFormUI;

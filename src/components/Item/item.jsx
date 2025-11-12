function item({ name, price, description, imageUrl }) {
  return (
    <article className='product-item'>
      <img src={imageUrl} alt={description} />
      <h2 className='product-title'>{name}</h2>
      <p>Precio : ${price}</p>
      <p>Descripcion: {description}</p>
    </article>
  );
}

export default item;

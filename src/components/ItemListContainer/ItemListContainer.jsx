import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ titulo }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        'https://690cdcfca6d92d83e84fba06.mockapi.io/productos'
      );

      if (!res.ok) {
        throw new Error('Hubo un problema al buscar productos');
      }

      const data = await res.json();
      if (category) {
        setProducts(data.filter((prod) => prod.category === category));
      } else {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
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

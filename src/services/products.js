const BASE_URL = 'https://690cdcfca6d92d83e84fba06.mockapi.io/productos';

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error('No se pudo crear el producto');
  }

  const result = await res.json();
  return result;
};

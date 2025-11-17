import { useState } from 'react';
import { validateProduct } from '../../../utils/validateProducts';
import { uploadToImgbb } from '../../../services/uploadImage';
import { createProduct } from '../../../services/products';
import ProductFormUI from '../ProductFormUI/ProductFormUI';

const productInitialState = {
  name: '',
  price: '',
  category: '',
  description: '',
};

function ProductFormContainer() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState(productInitialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const imageUrl = await uploadToImgbb(file);
      const productData = {
        ...product,
        price: Number(product.price),
        imageUrl,
      };

      await createProduct(productData);
      alert('Producto cargado con exito');
      setProduct(productInitialState);
      setFile(null);
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={setFile}
      onSubmit={handleSubmit}
    />
  );
}

export default ProductFormContainer;

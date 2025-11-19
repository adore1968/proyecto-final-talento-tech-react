import { useEffect, useState } from "react";
import { validateProduct } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import {
  createProduct,
  updateProduct,
  getProductById,
} from "../../../services/products";
import ProductFormUI from "../ProductFormUI/ProductFormUI";
import { useNavigate, useParams } from "react-router-dom";
import { showSuccess, showError } from "../../../utils/toast";

const productInitialState = {
  name: "",
  price: "",
  category: "",
  description: "",
};

function ProductFormContainer() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState(productInitialState);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductById(id)
        .then((product) => setProduct(product))
        .catch((err) => {
          console.log(err);
          showError(err.message);
        });
    }
  }, [id]);

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

    if (id) {
      try {
        const imageUrl = await uploadToImgbb(file);
        const productData = {
          ...product,
          price: Number(product.price),
          imageUrl,
        };

        await updateProduct(id, productData);
        showSuccess("Producto actualizado con exito");
        setProduct(productInitialState);
        setFile(null);
        navigate("/");
      } catch (error) {
        setErrors({ general: error.message });
        showError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const imageUrl = await uploadToImgbb(file);
        const productData = {
          ...product,
          price: Number(product.price),
          imageUrl,
        };

        await createProduct(productData);
        showSuccess("Producto cargado con exito");
        setProduct(productInitialState);
        setFile(null);
        navigate("/");
      } catch (error) {
        setErrors({ general: error.message });
        showError(error.message);
      } finally {
        setLoading(false);
      }
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
      id={id}
    />
  );
}

export default ProductFormContainer;

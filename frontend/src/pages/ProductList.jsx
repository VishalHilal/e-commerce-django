import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL;

  async function fetchProducts() {
    try {
      const response = await axios.get(`${BASE_URL}/api/products`);
      console.log("products are", response.data);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.log("error occured", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading products....</h1>
      ) : products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p> no products available</p>
      )}
    </div>
  );
}

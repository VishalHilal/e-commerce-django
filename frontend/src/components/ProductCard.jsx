import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL;

  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <img src={`${BASE_URL}${product.image}`} alt={product.name} />
        <h2>Name: {product.name}</h2>
        <p>Price: {Number(product.price).toFixed(2)}</p>
      </Link>
    </div>
  );
}

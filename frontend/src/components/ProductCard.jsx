import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL;

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn">
        <div className="relative overflow-hidden bg-gray-100 aspect-square">
          <img 
            src={`${BASE_URL}${product.image}`} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h2>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${Number(product.price).toFixed(2)}
            </span>
            
            <span className="text-sm text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
              {product.category.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

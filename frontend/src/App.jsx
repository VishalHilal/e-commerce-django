import ProductList from "./pages/ProductList.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";

export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

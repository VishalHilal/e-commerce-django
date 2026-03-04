import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const { cartItems } = useCart();

//   const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  console.log(cartCount, "this is cart count")

  return (
    <nav>
      <Link to="/">Test</Link>
      <Link to="/cart"><h1 className="border-1 mx-auto bg-blue-300">Cart Page</h1></Link>
      <h1 className="border-1 mx-auto bg-purple-300">Cart count is:  {cartCount}</h1>
    </nav>
  );
}

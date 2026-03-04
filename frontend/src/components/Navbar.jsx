import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  console.log(cartCount, "this is cart count")

  return (
    <nav>
      <Link to="/">Test</Link>
      <Link to="/cart"><h1>Cart Page</h1></Link>
      <h1>Cart count is:  {cartCount > 0 && <h2>{cartCount}</h2>}</h1>
    </nav>
  );
}

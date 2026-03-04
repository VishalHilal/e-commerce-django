import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div>
      {cartItems.length === 0 ? (
        <h1>your cart is empty</h1>
      ) : (
        <div className="ml-12">
          {cartItems.map((item) => (
            <>
              <div key={item.id}>
                <h2>{item.name}</h2>
                <br />
                <p>{item.price}</p>
              </div>
              <div>
                <button className="border-1 bg-red-200 p-2"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>

                <button className="border-1 p-2 bg-green-300"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeFromCart(item.id)}>remove</button>
              </div>
            </>
          ))}
        </div>
      )}

      <div>
        <p> total {total}</p>
      </div>
    </div>
  );
}

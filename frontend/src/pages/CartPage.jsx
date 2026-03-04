import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, total, removeFromCart, updateQuantity } = useCart();
  const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL;


  return (
    <div>
      {cartItems.length === 0 ? (
        <h1>your cart is empty</h1>
      ) : (
        <div className="ml-12">
          {cartItems.map((item) => (
            <div key={item.id}>
              <div>
                <h2>{item.product_name}</h2>
                <div>
                  {item.product_image && (
                    <img
                      src={`${BASE_URL}${item.product_image}`}
                    />

                  )}
                </div>
                <br />
                <p>{item.product_price}</p>
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
            </div>
          ))}
        </div>
      )}

      <div>
        <p> total {total}</p>
      </div>
    </div>
  );
}

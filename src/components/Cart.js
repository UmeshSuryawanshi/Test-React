import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="font-bold text-2xl">Cart</div>
      <div className="w-6/12 m-auto">
        {cartItems.length != 0 && (
          <button
            className="m-2 p-2 bg-black text-white rounded-lg"
            onClick={clearCartHandler}
          >
            Clear Cart
          </button>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

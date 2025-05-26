import "../CartWidget/cartWidget.scss";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  return (
    <div>
      <button className="cart-widget">
        <FaCartShopping  className="cart-icon"/>
        <span className="cart-count">0</span>
      </button>
    </div>
  );
};
export default Cart;

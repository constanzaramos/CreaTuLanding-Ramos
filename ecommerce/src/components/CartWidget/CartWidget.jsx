import '../CartWidget/cartWidget.scss';
const Cart = () => {
    return (
        <div className="cart-widget">
            < i class='bx  bx-cart'  ></i> 
            <span className="cart-count">0</span>
        </div>
    );
};
export default Cart;
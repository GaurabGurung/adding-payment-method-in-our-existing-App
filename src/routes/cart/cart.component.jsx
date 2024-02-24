import "./cart.styles.scss";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import emptyCart from "../../assests/empty_cart.jpg";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <img src={emptyCart} alt="" />
          <h2>No Items added to the Cart</h2>
          <p>Once you add items from the store, your cart will appear here.</p>
          <Link to="/shop" className="link">
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.base}>
              Start Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="checkout-container">
          <div className="checkout-header">
            <div className="header-block">
              <span> Product </span>
            </div>
            <div className="header-block">
              <span> Description </span>
            </div>
            <div className="header-block">
              <span> Quantity </span>
            </div>
            <div className="header-block">
              <span> Price </span>
            </div>
            <div className="header-block">
              <span> Remove </span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <span className="total"> Total : ${cartTotal} </span>

          <div className="cart_total_container">
            <h2 className="title">CART TOTAL</h2>
            <div className="cart__sub">
              <h5>SUBTOTAL</h5>
              <h4>$ {cartTotal}</h4>
            </div>
            <div className="cart__sub">
              <h5>SHIPPING</h5>
              <h4>$ 20</h4>
            </div>
            <div className="cart__sub">
              <h5>TOTAL</h5>
              <h4>{`$ ${cartTotal + 20} `}</h4>
            </div>
            <div className="btn__container">
              <Button
                type="button"
                buttonType={BUTTON_TYPE_CLASSES.base}
                className="btn"
              >
                <Link to="\check-out" className="btn_text">
                  Proceed to Checkout
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

import Button from "../button/button.component.jsx";
import {
  CartDropDown,
  EmptyMessage,
  CartItemsContainer,
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component.jsx";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const isCartOpen = useSelector(selectIsCartOpen);
  const goToCheckOutHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    navigate("/cart");
  };

  return (
    <CartDropDown>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropDown>
  );
};

export default CartDropdown;

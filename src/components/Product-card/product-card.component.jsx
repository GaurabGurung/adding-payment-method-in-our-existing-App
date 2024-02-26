import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  Preview,
} from "./product-card.styles.jsx";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { NavLink, useParams } from "react-router-dom";

const ProductCard = ({ product, title }) => {
  const { name, imageUrl, price, id } = product;
  const { category } = useParams();

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <Preview>
        <NavLink to={`/shop/${category || title}/product/${id}`}>
          <img src={imageUrl} alt={`${name}`} product={product} />
        </NavLink>

        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to Cart
        </Button>
      </Preview>
      <Footer>
        <Name> {name} </Name>
        <Price>${price} </Price>
      </Footer>
    </ProductCartContainer>
  );
};

export default ProductCard;

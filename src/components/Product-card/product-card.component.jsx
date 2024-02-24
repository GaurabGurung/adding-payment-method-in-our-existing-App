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
import { Link, useNavigate } from "react-router-dom";
import ProductDetail from "../product-detail/product-detail.component.jsx";

const ProductCard = ({ product, title, id }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <Preview>
        <Link to={`/${title}/product/${id}`}>
          <img src={imageUrl} alt={`${name}`} product={product} />
        </Link>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to Cart
        </Button>
      </Preview>
      <Footer>
        <Name> {name} </Name>
        <Price> {price} </Price>
      </Footer>
    </ProductCartContainer>
  );
};

export default ProductCard;

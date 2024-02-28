import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  Preview,
  FillFavIcon,
  EmptyFavIcon,
  ProductNameContainer,
} from "./product-card.styles.jsx";

import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { selectFavouriteItems } from "../../store/favourites/favourties.selector.js";
import { addToFavourites } from "../../store/favourites/favourities.action.js";

const ProductCard = ({ product, title }) => {
  const [isFav, setIsFav] = useState(false);
  const { name, imageUrl, price, id } = product;
  const { category } = useParams();

  const favItems = useSelector(selectFavouriteItems);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  const handleFavClick = () => {
    const action = addToFavourites(favItems, product);
    dispatch(action);
  };

  useEffect(() => {
    if (favItems.some((item) => item.id === parseInt(id))) {
      console.log(id);
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [id, favItems]);

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
        <ProductNameContainer>
          <Name> {name} </Name>
          {isFav ? (
            <FillFavIcon onClick={handleFavClick} />
          ) : (
            <EmptyFavIcon onClick={handleFavClick} />
          )}
        </ProductNameContainer>
        <Price>${price} </Price>
      </Footer>
    </ProductCartContainer>
  );
};

export default ProductCard;

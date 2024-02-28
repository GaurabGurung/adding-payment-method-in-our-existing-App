import React from "react";
import "../favourites/favourites.styles.scss";
import { useSelector } from "react-redux";
import {
  selectFavouriteCount,
  selectFavouriteItems,
} from "../../store/favourites/favourties.selector";
import ProductCard from "../../components/Product-card/product-card.component";
import { Link } from "react-router-dom";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

const Favourites = () => {
  const favItems = useSelector(selectFavouriteItems);
  const favCount = useSelector(selectFavouriteCount);
  return (
    <div className="favourites__container">
      {favCount === 0 ? (
        <div className="empty">
          <h2 className=" text ">No Items has been added to the Favourites</h2>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google}>
            <Link className="btn" to="/shop">
              Continue Shopping
            </Link>
          </Button>
        </div>
      ) : (
        <div className="product__container">
          {favItems.map((product) => (
            <ProductCard
              product={product}
              title={product.title}
              key={product.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;

import React, { useState, useEffect } from "react";
import "../product-detail/product-detail.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/spinner.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import ProductCard from "../Product-card/product-card.component";
import { ReactComponent as EmptyHeart } from "../../assests/heart-line.svg";
import { ReactComponent as FillHeart } from "../../assests/heart-fill.svg";
import { selectFavouriteItems } from "../../store/favourites/favourties.selector";
import { addToFavourites } from "../../store/favourites/favourities.action";

const ProductDetail = () => {
  const [isFav, setIsFav] = useState(false);
  const { id, category } = useParams();

  const dispatch = useDispatch();

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const product = Object.entries(categoriesMap)
    .filter(([title]) => title === category)
    .flatMap(([title, products]) => products)
    .flat()
    .find((product) => product.id === parseInt(id));

  const relatedProducts = Object.entries(categoriesMap)
    .filter(([title]) => title === category)
    .flatMap(([title, products]) => products)
    .flat()
    .filter((product) => product.id !== parseInt(id));

  const favItems = useSelector(selectFavouriteItems);
  console.log(favItems);

  const handleFavClick = () => {
    // Check if the product is already in favItems
    const isProductInFav = favItems.some(
      (favItem) => favItem.id === product.id
    );

    // Toggle isFav based on the existence of the product in favItems
    setIsFav(!isProductInFav);

    // Dispatch the addToFavourites action when the heart icon is clicked
    const action = addToFavourites(favItems, product);
    dispatch(action);
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        id &&
        product && (
          <>
            <section className="product__detail__container">
              <div className="image__container">
                <img src={product.imageUrl} alt="" />
              </div>
              <div className="details">
                <h2>{product.name}</h2>
                <h4>${product.price}</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid officiis impedit quos illo pariatur cumque vero autem
                  quo velit quas voluptates, neque eaque praesentium totam amet
                  deserunt illum error ut!
                </p>
                <div className="btn__container">
                  <Button
                    buttonType={BUTTON_TYPE_CLASSES.google}
                    className="cart__btn"
                  >
                    Add To Cart
                  </Button>

                  {isFav ? (
                    <FillHeart className="heartIcon" onClick={handleFavClick} />
                  ) : (
                    <EmptyHeart
                      className="heartIcon"
                      onClick={handleFavClick}
                    />
                  )}
                </div>
              </div>
            </section>
            <section className="related__product__container">
              <h2>You may also like</h2>
              <div className="related_productCard">
                {relatedProducts.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </section>
          </>
        )
      )}
    </>
  );
};

export default ProductDetail;

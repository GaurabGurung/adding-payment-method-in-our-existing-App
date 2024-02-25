import React, { useState, useEffect } from "react";
import "../product-detail/product-detail.styles.scss";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/spinner.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import ProductCard from "../Product-card/product-card.component";

const ProductDetail = () => {
  const { id, category } = useParams();
  console.log("heeyy");

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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla non magni facili blanditiis molestias soluta eveniet
                  illum accusantium eius mollitia eligendi, ex iste doloribus
                  magnam.
                </p>
                <div className="btn__container">
                  <Button
                    buttonType={BUTTON_TYPE_CLASSES.google}
                    className="cart__btn"
                  >
                    Add To Cart
                  </Button>
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

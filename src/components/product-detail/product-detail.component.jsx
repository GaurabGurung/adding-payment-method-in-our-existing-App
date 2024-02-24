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
import Category from "../../routes/category/category.component";

const ProductDetail = () => {
  const { id, category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const product = Object.entries(categoriesMap)
    .filter(([title]) => title === category)
    .flatMap(([title, products]) => products)
    .flat()
    .find((product) => product.id === parseInt(id));

  const relatedProducts = Object.entries(categoriesMap)
    .filter(([title]) => title === category)
    .flatMap(([title, products]) => products);
  // .flat()
  // .find((product) => product.id !== parseInt(id));

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
                <div>
                  <Button buttonType={BUTTON_TYPE_CLASSES.google}>
                    Add To Cart
                  </Button>
                </div>
              </div>
            </section>
            <section>
              <h2>You may also like</h2>
              {relatedProducts.map((product) => (
                <Category product={product} key={product.id} />
              ))}
            </section>
          </>
        )
      )}
    </>
  );
};

export default ProductDetail;
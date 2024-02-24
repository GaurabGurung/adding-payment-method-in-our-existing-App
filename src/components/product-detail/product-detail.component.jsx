import React from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id, category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);

  // Check if the category exists in categoriesMap
  if (!(category in categoriesMap)) {
    return <div>Category not found</div>;
  }

  // Find the product with the specified id in the selected category
  const selectedCategory = categoriesMap[category];
  const product = selectedCategory.find((item) => item.id === id);

  // Check if the product exists
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <img src={product.imageUrl} alt="" />
    </div>
  );
};

export default ProductDetail;

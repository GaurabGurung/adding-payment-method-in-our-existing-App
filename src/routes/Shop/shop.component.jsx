import CategoriesPreview from "../categories-preview/categories-preview.component";
import { Route, Routes } from "react-router-dom";
import Category from "../category/category.component";
import { useEffect } from "react";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
import ProductDetail from "../../components/product-detail/product-detail.component";

// import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
    window.scroll(0, 0);
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      <Route path=":category/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};
export default Shop;

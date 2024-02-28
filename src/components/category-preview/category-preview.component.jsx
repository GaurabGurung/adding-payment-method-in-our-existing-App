import {
  CategoryPreviewContainer,
  TitleLink,
  Preview,
  ButtonSeeMore,
} from "./category-preview.styles.jsx";
import ProductCard from "../Product-card/product-card.component.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2 style={{ textAlign: "center" }}>
        <TitleLink>{title.toUpperCase()}</TitleLink>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 5)
          .map((product) => (
            <ProductCard key={product.id} product={product} title={title} />
          ))}
      </Preview>

      <ButtonSeeMore to={title}>See More</ButtonSeeMore>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

/**
 * Link Component:
         The Link component is used to create clickable links in your application. 
         It sets the target URL to which you want to navigate. When a user clicks on a link, 
          it changes the URL in the browser's address bar.
 * 
 * useParams Hook:
    The useParams hook is used to access and extract URL parameters from 
    the current route's URL. It allows you to read the parameters from the URL and 
    use them in your components.
 */

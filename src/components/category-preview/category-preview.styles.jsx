import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  padding: 10px;
  font-size: 1.8rem;
  margin-top: 10px;
  transition: color 0.3s, box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.5);
    // text-decoration: underline;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  column-gap: 40px;
  row-gap: 70px;
  margin-bottom: 30px;

  @media screen and (max-width: 484px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
  }
`;

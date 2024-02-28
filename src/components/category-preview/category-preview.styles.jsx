import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Button from "../button/button.component.jsx";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  // border-bottom: 1px solid #c9c9c9;
  margin-buttom: 100px;
`;

export const TitleLink = styled.div`
  font-size: 28px;
  margin-bottom: 0px;
  // cursor: pointer;
  text-decoration: none;
  color: black;
  padding: 10px;
  font-size: 1.8rem;
  margin-top: 10px;
  transition: color 0.3s, box-shadow 0.3s;
  // &:hover {
  //   box-shadow: 0 0 10px rgba(128, 128, 128, 0.5);
  //   // text-decoration: underline;
  // }
`;

export const Preview = styled.div`
  display: grid;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  column-gap: 40px;
  row-gap: 70px;
  margin-bottom: 30px;
  @media screen and (max-width: 484px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
  }
  @media screen and (min-width: 1900px) {
    width: 80%;
  }
`;

export const ButtonSeeMore = styled(Link)`
  width: 200px;
  padding: 10px;
  border: 1px solid #c9c9c9;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  text-align: center;
  margin-bottom: 30px;
  // background-color: teal;
  color: #000;
  font-size: 1.2rem;
  &:hover {
    background-color: #d4ad00;
    background-color: teal;
    color: white;
  }
`;

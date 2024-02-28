import { styled } from "styled-components";
import { ReactComponent as bookmarkLine } from "../../assests/bookmark-line.svg";
import { ReactComponent as bookmarkFill } from "../../assests/bookmark-fill.svg";

export const ProductCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  position: relative;
  margin-top: 20px;
  width: auto;
  height: 100%;

  div {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 0.3s, transform 0.3s;
      @media screen and (max-width: 485px) {
      }
    }
    button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 300px;
      left: 30px;
      line-height: 15px;
      display: none;
    }
    &:hover {
      img {
        opacity: 0.8;
        transform: scale(1.1);
      }
      button {
        opacity: 0.85;
        display: flex;
      }
    }
  }
  @media screen and (max-width: 484px) {
    height: 100%;
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  padding: 0 10px;
  border: 1px solid #c9c9c9;
`;
export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span``;
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 40px;
  row-gap: 70px;
  margin-top: 30px;
  height: 400px;
  overflow: hidden;

  @media screen and (max-width: 484px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
  }
`;

export const EmptyFavIcon = styled(bookmarkLine)`
  width: 30px;

  right: 10px;
  top: 50px;
  cursor: pointer;
`;

export const FillFavIcon = styled(bookmarkFill)`
  width: 30px;

  right: 10px;
  top: 50px;
  cursor: pointer;
`;

export const ProductNameContainer = styled.div`
  display: flex;
  width: 100%;
`;

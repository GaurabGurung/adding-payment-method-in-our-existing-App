import { styled } from "styled-components";

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
      margin-bottom: 20px;
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
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 10px;
  font-weight: 700;
  padding: 0 10px;
`;
export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span``;
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  column-gap: 40px;
  row-gap: 70px;
  margin-top: 30px;
  height: 400px;
  overflow: hidden;

  @media screen and (max-width: 484px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
  }
`;

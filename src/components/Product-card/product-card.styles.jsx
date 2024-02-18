import { styled } from "styled-components";

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  position: relative;
  margin-top: 30px;
  div {
    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      margin-bottom: 20px;
      transition: opacity 0.3s, transform 0.3s;
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
    height: 180px;
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;

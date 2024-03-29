import {
  BaseBotton,
  GoogleSignInBotton,
  InvertedButton,
} from "../button/button.styles";
import styled from "styled-components";

export const CartDropDown = styled.div`
  position: absolute;
  // width: 260px;
  // height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 140px;
  right: 40px;
  z-index: 5;

  ${BaseBotton},
  ${GoogleSignInBotton},
    ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  width: auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

import styled from "styled-components";
import { ReactComponent as ShoppingSVG } from "../../assests/shopping-bag.svg";

export const ShoppingIconContainer = styled(ShoppingSVG)`
  width: 48px;
  height: 48px;
  @media screen and (max-width: 820px) {
    width: 40px;
  }
`;

export const CartIconContainer = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:click {
    transform: scale(1.1);
  }
  @media screen and (max-width: 820px) {
    width: auto;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  bottom: 6px;
`;

import { styled } from "styled-components";
import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseBotton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;

  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "IBM+Plex+Sans+Condensed";
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.3s, box-shadow 0.3s;
  &:hover {
    background-color: white;
    color: black;
    border: 0px solid black;
    box-shadow: 0 0 20px #a38500;
  }
`;

export const GoogleSignInBotton = styled(BaseBotton)`
  background-color: teal;
  color: white;
  &:hover {
    background-color: #d4ad00;
    color: white;
  }
`;

export const InvertedButton = styled(BaseBotton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

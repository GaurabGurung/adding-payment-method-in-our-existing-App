import { styled } from "styled-components";
import Button from "../button/button.component";

export const SignUpContainer = styled.div`
  display: flex;
  flex: 0 0 100%;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin-top: 80px;
  padding: 0 20px;
`;

export const RegisterButton = styled(Button)`
  width: 100% !important;
  background: #fff;
  color: black;
  border: 1px solid black;
  transition: color 0.3s, box-shadow 0.3s;
  transition: border 0.1s;
  &:hover {
    border: 1px solid white;
  }
`;
export const SignInButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "IBM+Plex+Sans+Condensed";
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
  border: 1px solid black;
  background: #000;
  transition: color 0.3s, box-shadow 0.3s;
  transition: border 0.1s;

  &:hover {
    box-shadow: 0 0 10px #a38500;
    color: #000;
    background: #fff;
    border: 1px solid white;
  }
`;

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
  &:hover {
    box-shadow: 0 0 10px #a38500;
  }
`;
export const SignInButton = styled(Button)`
  width: 100% !important;
  background: #fff;
  color: #fff;
  border: 1px solid black;
  background: #000;
  transition: color 0.3s, box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 10px #a38500;
    color: #000;
    background: #fff;
  }
`;

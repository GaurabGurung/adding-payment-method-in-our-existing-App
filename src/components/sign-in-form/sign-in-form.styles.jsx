import { styled } from "styled-components";
import Button from "../button/button.component";

export const SignInContainer = styled.div`
  display: flex;
  flex: 0 0 100%;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  min-width: 350px;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin-top: 100px;
`;
export const TextStyle = styled.h2`
  margin: 10px 0;
  text-align: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RegisterContainer = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 30px;
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

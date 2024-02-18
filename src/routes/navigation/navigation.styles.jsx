import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 55px;
  border-bottom: 1px solid rgba(192, 192, 192, 1);
  align-items: center;
  padding-left: 20px;
`;
export const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 45px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: flex-end;
  padding: 0 35px;
  margin-right: 30px;
`;
export const NavLink = styled(Link)`
  padding: 5px 25px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 0;
  color: #000;
  font-size: 1.2rem;
  transition: color 0.3s, box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 25px #a38500;
  }
`;
export const Logo = styled(CrwnLogo)`
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    color: #000;
  }
`;
export const AuthContainer = styled.div`
  margin-right: 10px;
`;
export const TitleStyle = styled.h1`
  font-size: 3rem;
  background: linear-gradient(45deg, #a38500, #ffe678, #a38500);
  -webkit-background-clip: text;
  color: transparent;
`;

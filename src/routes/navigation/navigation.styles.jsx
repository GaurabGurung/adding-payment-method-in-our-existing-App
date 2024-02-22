import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import { ReactComponent as MenuBar } from "../../assests/menu-line.svg";
import { ReactComponent as MailIcon } from "../../assests/mail-line.svg";

export const NavigationContainer = styled.div`
  postion: relative;
  width: 100%;
  display: flex;
  margin-bottom: 55px;
  border-bottom: 1px solid rgba(192, 192, 192, 1);
  align-items: center;
  margin-top: 50px;
  min-width: 375px;
  @media screen and (max-width: 820px) {
  }
  @media screen and (max-width: 455px) {
    margin-top: 10px;
  }
`;
export const LogoContainer = styled.div`
  height: 100%;
  width: 80%;
  padding: 0 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 45px;
  @media screen and (max-width: 820px) {
    padding-left: 15px;
    gap: 15px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 35px;
  margin-right: 0px;
  @media screen and (max-width: 820px) {
    padding: 2px;
    margin-right: 0px;
  }
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
  @media screen and (max-width: 1040px) {
    font-size: 1rem;
  }
  font-weight: ${({ isactive }) => (isactive ? " 800" : "")};
  color: ${({ isactive }) => (isactive ? " rgba(240, 105, 180, 1)" : "")};
`;
export const Logo = styled(CrwnLogo)`
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease-in-out;
  margin-left: 20px;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    color: #000;
  }
  @media screen and (max-width: 1040px) {
    width: 50px;
    margin: 0;
  }
  @media screen and (max-width: 820px) {
  }
`;
export const AuthContainer = styled.div`
  margin-right: 10px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const TitleStyle = styled.h1`
  font-size: 3rem;
  background: linear-gradient(45deg, #a38500, #ffe678, #a38500);
  -webkit-background-clip: text;
  color: transparent;
  white-space: nowrap;
  font-weight: 300;
  font-family: cursive;
  span {
    font-size: 5rem;
  }

  @media screen and (max-width: 1040px) {
    font-size: 2rem;
    span {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 820px) {
    font-size: 2rem;
    span {
      font-size: 3rem;
    }
  };
  @media screen and (max-width: 455px) {
    white-space: normal;
  }
  };
  @media screen and (max-width: 530px) {

  font-size: 1rem;
  width: auto;
  span {
    font-size: 1.8rem;
  }
`;

export const LetterF = styled.span`
  fontsize: "5.5rem";
  fontweight: "900";
  color: "#d4af37";
`;

export const LetterE = styled.span`
  fontsize: "4rem";
  fontweight: "400";
`;
export const MenuBarLine = styled(MenuBar)`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  display: none;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
`;

export const MenuBarContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  display: block;
  margin-left: 10px;
  position: relative;
`;

export const SideMenu = styled.div`
  position: fixed;
  width: 280px;
  height: 100%;
  background: #fff;
  top: 0;
  right: 0;
  right: -350px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  gap: 20px;

  ul {
    list-style: none;
    padding: 0;
    color: pink;

    li {
      padding: 10px 0;
      margin-top: 30px;
    }
  }
  right: ${({ isactive }) => (isactive ? "0" : "-350px")};
  transition: right 0.5s ease-in-out;
`;
export const MobileMenuContainer = styled.div``;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(128, 128, 128, 0.5);
  z-index: 10;
  top: 0;
  left: 0;
  transition: background 0.5s ease-in-out;
`;

export const SideMenuActive = styled.div`
  right: 0;
`;

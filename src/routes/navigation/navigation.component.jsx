import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
  Logo,
  TitleStyle,
  AuthContainer,
  MenuBarLine,
  LetterF,
  LetterE,
  MenuBarContainer,
  SideMenu,
  MobileMenuContainer,
  Overlay,
} from "./navigation.styles";
import { Fragment, useState } from "react";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const NavLinkWithStyle = ({ to, children }) => (
    <NavLink
      to={to}
      onClick={handleSideMenu}
      style={{
        color: currentPath === to ? "rgba(240, 105, 180, 1)" : "",
        fontWeight: currentPath === to ? "900" : "",
      }}
    >
      {children}
    </NavLink>
  );

  const SideMenuWithStyle = ({ children }) => (
    <SideMenu
      style={{
        right: isSideMenuOpen === false ? "0" : "",
      }}
    ></SideMenu>
  );

  const signOutUser = () => {
    dispatch(signOutStart());
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const handleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

  /**
  useSelector is a hook that you pass a selector function,
  a selector function is something that essentially extracts off that
  the values that you want from the whole entire Redux store
 */
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer>
          <Link to="/">
            <Logo style={{ fill: "#fff" }} />
          </Link>
          <TitleStyle>
            <LetterF>F</LetterF>
            ashion <LetterE>E</LetterE>
            legance
          </TitleStyle>
        </LogoContainer>

        <NavLinks>
          <AuthContainer>
            <NavLink to="/shop">SHOP</NavLink>

            {currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to="/auth">SIGN IN</NavLink>
            )}
          </AuthContainer>
          <CartIcon />
          <MenuBarContainer>
            {isSideMenuOpen ? <Overlay onClick={handleSideMenu} /> : ""}

            <MenuBarLine onClick={handleSideMenu} />
            <MobileMenuContainer>
              <SideMenu isactive={isSideMenuOpen ? "isactive" : ""}>
                <Logo />
                <TitleStyle>
                  <LetterF>F</LetterF>
                  ashion <LetterE>E</LetterE>
                  legance
                </TitleStyle>
                <ul>
                  <li>
                    <NavLinkWithStyle to="/">HOME</NavLinkWithStyle>
                  </li>
                  <li>
                    <NavLinkWithStyle to="/shop">SHOP</NavLinkWithStyle>
                  </li>
                  <li>
                    <NavLinkWithStyle to="/cart">CART</NavLinkWithStyle>
                  </li>
                  <li>
                    {currentUser ? (
                      <NavLink to="/" onClick={signOutUser}>
                        SIGN OUT
                      </NavLink>
                    ) : (
                      <NavLinkWithStyle to="/auth">SIGN IN</NavLinkWithStyle>
                    )}
                  </li>
                </ul>
              </SideMenu>
            </MobileMenuContainer>
          </MenuBarContainer>

          {isCartOpen && <CartDropdown />}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

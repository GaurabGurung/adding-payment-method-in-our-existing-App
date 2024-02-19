import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Link, Outlet } from "react-router-dom";
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
} from "./navigation.styles";
import { Fragment } from "react";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());
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
            <MenuBarLine />
            <SideMenu />
          </MenuBarContainer>

          {isCartOpen && <CartDropdown />}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

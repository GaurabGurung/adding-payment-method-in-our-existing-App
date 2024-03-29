import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/Home/home.components";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/Shop/shop.component";

import { useEffect } from "react";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import SignInForm from "./components/sign-in-form/sign-in-form.component";
import Footer from "./components/MainFooter/Footer.component";
import Cart from "./routes/cart/cart.component";
import Favourites from "./routes/favourites/favourites.component";
import Cancel from "./routes/cancel/cancel";
import Success from "./routes/success/success.component";
import ScrollUp from "./components/scroll-up/scroll-up";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Route>
        </Routes>
      </div>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;

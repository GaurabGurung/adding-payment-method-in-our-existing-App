import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/Home/home.components";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/Shop/shop.component";
import CheckOut from "./routes/check-out/check-out.component";

import { useEffect } from "react";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import SignInForm from "./components/sign-in-form/sign-in-form.component";
import Footer from "./components/MainFooter/Footer.component";
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
            <Route path="/Shop/*" element={<Shop />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/signin" element={<SignInForm />} />
            {/* <Route path="/mens" element={}/> */}
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

import Directory from "../../components/directory/directory.component";
import "../Home/home.styles.scss";

import { Outlet } from "react-router-dom";

import Slider from "../../components/slider/slider.component";
import { useEffect } from "react";
import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import SHOP_DATA from "../../shop-data";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);

    // addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);

  return (
    <div>
      <Outlet />
      <div className="home__slider">
        <Slider className="slider" />
        <div className="slide__overlay">
          <h2>Elevate Your Style, Embrace Fashion Elegance</h2>
          <h5>Where Style Meets Grace – Welcome to Fashion Elegance.</h5>
        </div>
      </div>
      <Directory />
    </div>
  );
};

export default Home;

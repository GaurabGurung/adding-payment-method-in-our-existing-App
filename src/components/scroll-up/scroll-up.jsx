// ScrollUp.jsx

import React, { useEffect, useState } from "react";
import "../scroll-up/scroll-up.scss";
import ArrowUp from "../../assests/arrow-up.png";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollUp = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 350) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollUp);

    return () => {
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);

  return (
    <div
      id="arrow"
      className={`arrow ${showScroll ? "showScroll" : ""}`}
      onClick={scrollToTop}
    >
      <img src={ArrowUp} alt="Scroll to Top" />
    </div>
  );
};

export default ScrollUp;

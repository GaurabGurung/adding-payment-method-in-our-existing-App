import React, { useState, useEffect } from "react";
import "./success.scss";

import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import confirm from "../../assests/confirmed.json";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import OrderPic from "../../assests/orderPic.json";

const Success = () => {
  const [showProcessing, setShowProcessing] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowProcessing(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="success__container">
      {showProcessing ? (
        <div className="processing">
          <Lottie animationData={OrderPic} className="icon" />
          <p>Processing your Order</p>
        </div>
      ) : (
        <>
          <Lottie
            loop={false}
            animationData={confirm}
            className="confirm_icon"
          />
          <div className="thanks_container">
            <h3 className="text">Thank you for shopping with us</h3>
            <p>
              Happy shopping, and we look forward to serving you again soon!
            </p>
            <Button
              className="buy__btn"
              buttonType={BUTTON_TYPE_CLASSES.google}
            >
              <Link to="/shop" className="link">
                Shop More
              </Link>
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default Success;

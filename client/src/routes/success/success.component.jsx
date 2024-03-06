import React from "react";
import "./success.scss";

import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import confirm from "../../assests/confirmed.json";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

const Success = () => {
  return (
    <section className="success__container">
      <Lottie loop={false} animationData={confirm} className="confirm_icon " />
      <div className="thanks_container">
        <h3 className="text">Thank you for shopping with us</h3>
        <p>Happy shopping, and we look forward to serving you again soon!</p>
        <Button className="buy__btn" buttonType={BUTTON_TYPE_CLASSES.google}>
          <Link to="/shop" className="link">
            Shop More
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Success;

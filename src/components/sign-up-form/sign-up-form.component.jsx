import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import FormInput from "../form-input/form-input.component";

import {
  SignUpContainer,
  RegisterButton,
  SignInButton,
} from "./sign-up-form.styles";

import { signUpStart } from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const signInHandle = () => navigate("/signin");

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (currentUser) {
      navigate("/shop");
    }
  }, [currentUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <div style={{ textAlign: "center" }}>
        <h2> Don't have an account?</h2>
        <span> Sign up with your email and password </span>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          type="text"
          name="displayName"
          required
          label="Display Name"
          value={displayName}
        />
        <FormInput
          type="email"
          name="email"
          required
          label="Email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          type="password"
          name="password"
          required
          label="Password"
          onChange={handleChange}
          value={password}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          required
          label="Confirm Password"
          onChange={handleChange}
          value={confirmPassword}
        />
        <SignInButton type="submit">Sign up</SignInButton>
        <p className="text-center mt-3">Already have an account? </p>
        <RegisterButton onClick={signInHandle} type="button">
          Sign In here
        </RegisterButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;

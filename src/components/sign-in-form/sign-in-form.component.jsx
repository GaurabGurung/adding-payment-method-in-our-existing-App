import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useEffect, useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  SignInContainer,
  TextStyle,
  ButtonContainer,
  RegisterContainer,
  RegisterButton,
  GuestButton,
} from "./sign-in-form.styles.jsx";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase.utils.js";
import { toast } from "react-toastify";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
      navigate("/home");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not found");
          break;

        case "auth/wrong-password":
          alert(" Wrong Password");
          break;

        default:
          console.log(error);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      console.log("Authentication state changed:", user)
    );
    return () => {
      unsubscribe();
    };
  }, [auth]);

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      toast.success("Guest logged in Successfully");
    } catch (error) {
      console.error("Error during guest login:", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const Handleregister = () => {
    navigate("/signup");
  };

  return (
    <SignInContainer>
      <TextStyle> Already have an account?</TextStyle>
      <p style={{ textAlign: "center" }}>
        Sign in with your email and password{" "}
      </p>
      <form onSubmit={handleSubmit}>
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
        <ButtonContainer>
          <Button type="submit" style={{ width: "100%", marginRight: "10px" }}>
            Sign in
          </Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
            style={{ width: "100%", lineHeight: "15px" }}
          >
            Google sign in
          </Button>
        </ButtonContainer>
      </form>

      <RegisterContainer>
        Don't have an account? Create an account
      </RegisterContainer>
      <ButtonContainer>
        <RegisterButton type="button" onClick={Handleregister}>
          Register
        </RegisterButton>
      </ButtonContainer>

      <RegisterContainer>Or</RegisterContainer>
      <ButtonContainer>
        <GuestButton type="button" onClick={handleGuestLogin}>
          Guest Login
        </GuestButton>
      </ButtonContainer>
    </SignInContainer>
  );
};

export default SignInForm;

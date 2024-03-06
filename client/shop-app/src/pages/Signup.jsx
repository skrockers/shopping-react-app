import React, { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Login from "./Login";
import Spinner from "../components/Spinner";

const Signup = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });
  const [signupError, setsignupError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });

  const [spinner, setSpinner] = useState(false);

  const signupSubmitHandler = async (e) => {
    setSpinner(true)
    e.preventDefault();
    const signUpName =
      signupInput && signupInput.name ? signupInput.name : null;
    const signUpEmail =
      signupInput && signupInput.email ? signupInput.email : null;
    const signUpPassword =
      signupInput && signupInput.password ? signupInput.password : null;
    const signUpConfirmPassword =
      signupInput && signupInput.confirmPassword
        ? signupInput.confirmPassword
        : null;
    const signUpContact =
      signupInput && signupInput.contact ? signupInput.contact : null;

    console.log(`${signUpName} ${signUpEmail} ${signUpPassword}
     ${signUpConfirmPassword} ${signUpContact}`)
    if (
      !signUpName ||
      !signUpEmail ||
      !signUpPassword ||
      !signUpConfirmPassword ||
      !signUpContact
    ) {
      setSpinner(false)
      setsignupError({
        name: "Name field is Blank",
        email: "Email Field is blank",
        password: "Password Field is blank",
        confirmPassword: "Confirm Password Field is blank",
        contact: "Contact Field is blank",
      });
    }

    const serverResponse = await fetch('http://localhost:5000/account/signup',{
      method:'POST',
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        name: signUpName,
        email: signUpEmail,
        password: signUpPassword,
        confirmPassword: signUpConfirmPassword,
        contactNo: signUpContact
      })
    }) 

    const result = serverResponse.json();
    setSpinner(false);
    if(serverResponse.status === 200 && result.isOk) {
      window.alert("Signup Success")
    }
    else {
      window.alert('Something went wrong')
    }

    
  };
  return (
    <section className="signup-section">
      <div className="signup-heading">
        <h1>Signup</h1>
      </div>
      <form className="signup-form">
        <div className="signup-user-name signup-flex">
          <label htmlFor="user-name">Name:</label>
          <input
            type="text"
            name="user-name"
            className={
              !signupInput.name && signupError && signupError.name
                ? "user-name-input error-active"
                : "user-name-input"
            }
            onChange={(e) =>
              setSignupInput({ ...signupInput, name: e.target.value })
            }
          />
          <div className="signup-input-error">
            {!signupInput.name && signupError && signupError.name
              ? signupError.name
              : ""}
          </div>
        </div>
        <div className="signup-user-email signup-flex">
          <label htmlFor="user-email">Email:</label>
          <input
            type="email"
            name="user-email"
            className={
              !signupInput.email && signupError && signupError.name
                ? "user-email-input error-active"
                : "user-email-input"
            }
            onChange={(e) =>
              setSignupInput({ ...signupInput, email: e.target.value })
            }
          />
          <div className="signup-input-error">
            {!signupInput.email && signupError && signupError.name
              ? signupError.email
              : ""}
          </div>
        </div>
        <div className="signup-user-password signup-flex">
          <label htmlFor="user-password">Password:</label>
          <input
            type="password"
            name="user-password"
            className={
              !signupInput.password && signupError && signupError.password
                ? "user-password-input error-active"
                : "user-password-input"
            }
            onChange={(e) =>
              setSignupInput({ ...signupInput, password: e.target.value })
            }
          />
          <div className="signup-input-error">
            {!signupInput.password && signupError && signupError.password
              ? signupError.password
              : ""}
          </div>
        </div>
        <div className="signup-user-confirm-password signup-flex">
          <label htmlFor="user-confirm-password">Confirm Password:</label>
          <input
            type="password"
            name="user-confirm-password"
            className={
              !signupInput.confirmPassword &&
              signupError &&
              signupError.confirmPassword
                ? "user-confirm-password-input error-active"
                : "user-confirm-password-input"
            }
            onChange={(e) =>
              setSignupInput({
                ...signupInput,
                confirmPassword: e.target.value,
              })
            }
          />
          <div className="signup-input-error">
            {(!signupInput.confirmPassword &&
            signupError &&
            signupError.confirmPassword)
              ? signupError.confirmPassword
              : (signupInput.confirmPassword && signupInput.password && signupInput.confirmPassword !== signupInput.password) ? "Password not matching":""}
          </div>
        </div>
        <div className="signup-user-contact signup-flex">
          <label htmlFor="user-contact">Phone Number:</label>
          <input
            type="number"
            name="user-contact"
            className={
              !signupInput.contact && signupError && signupError.contact
                ? "user-contact-input error-active"
                : "user-contact-input"
            }
            onChange={(e) =>
              setSignupInput({ ...signupInput, contact: e.target.value })
            }
          />
          <div className="signup-input-error">
            {!signupInput.contact && signupError && signupError.contact
              ? signupError.contact
              : ""}
          </div>
        </div>

        <div className="redirect-to-login">
              <Link className="login-link" to="/login"> Already have account ? Login here</Link>
        </div>
        <div className="signup-user-submit">
          <Button
            buttonName={"Signup"}
            buttonType={"signup-submit"}
            buttonSubmit={"submit"}
            buttonForm={"signup-form"}
            buttonClickHandler={signupSubmitHandler}
            buttonSpinner={spinner ? "mini-spinner" : null}
          />
        </div>
      </form>
    </section>
  );
};

export default Signup;

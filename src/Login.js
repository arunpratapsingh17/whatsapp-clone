import { Button } from "@material-ui/core";
import { auth, provider } from "./Firebase";
import React from "react";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://indianmemetemplates.com/storage/evil-doge.jpg"
          alt="Login photo"
        />
        <div className="login_text">
          <h1>Sign in into whatsapp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in with google
        </Button>
      </div>
    </div>
  );
};

export default Login;

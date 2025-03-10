import { getAuth } from "firebase/auth";
import { useState } from "react";
import "./App.css";
import { app } from "./firebase";
const auth = getAuth(app);
function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const signupUser = () => {
    signInWithEmailAndPassword(auth, email, password).then((value) =>
      console.log(value)
    );
  };
  return (
    <>
      <div className="container">
   
        <div className="screen">
     
          <div className="screen__content">
         
            <form className="login">
            <h1>Sign In</h1>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Enter your email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Enter your password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="button login__submit" onClick={signupUser}>
                <span className="button__text">Sign In</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;

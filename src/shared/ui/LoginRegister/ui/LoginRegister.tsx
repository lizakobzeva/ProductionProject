import React, { useState } from "react";
import style from "./LoginRegister.module.scss";
import Button from "shared/ui/Button";
const LoginRegister = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <article className={isSignUp ? style.Click : ""}>
      <div className={style.Titles}>
        <h3 onClick={() => setIsSignUp(true)}>SignUp</h3>
        <h3 onClick={() => setIsSignUp(false)}>LogIn</h3>
      </div>

      <label htmlFor="reg-log"></label>
      <div className={style.card3DWrap}>
        <div className={style.card3DWrapper}>
          <div className={style.cardFront}>
            <form className={style.centerWrap}>
              <h4 className={style.cardTitle}>Log In</h4>
              <div className={style.formGroup}>
                <input
                  type="email"
                  name="logemail"
                  className={style.formStyle}
                  placeholder="Your Email"
                  id="logemail"
                  autoComplete="off"
                />
              </div>
              <div className={style.formGroup}>
                <input
                  type="password"
                  name="logpass"
                  className={style.formStyle}
                  placeholder="Your Password"
                  id="logpass"
                  autoComplete="off"
                />
              </div>
              <Button>Submit</Button>
              <p>
                <a href="#0" className={style.link}>
                  Forgot your password?
                </a>
              </p>
            </form>
          </div>
          <div className={style.cardBack}>
            <form className={style.centerWrap}>
              <h4 className={style.cardTitle}>Sign Up</h4>
              <div className={style.formGroup}>
                <input
                  type="text"
                  name="logname"
                  className={style.formStyle}
                  placeholder="Your Full Name"
                  id="logname"
                  autoComplete="off"
                />
              </div>
              <div className={style.formGroup}>
                <input
                  type="email"
                  name="logemail"
                  className={style.formStyle}
                  placeholder="Your Email"
                  id="logemail"
                  autoComplete="off"
                />
                <i className={style.inputIcon}></i>
              </div>
              <div className={style.formGroup}>
                <input
                  type="password"
                  name="logpass"
                  className={style.formStyle}
                  placeholder="Your Password"
                  id="logpass"
                  autoComplete="off"
                />
                <i className={style.inputIcon}></i>
              </div>
              <Button>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LoginRegister;

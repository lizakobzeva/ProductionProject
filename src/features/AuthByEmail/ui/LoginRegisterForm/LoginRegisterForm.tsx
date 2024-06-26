import { useEffect, useState } from "react";
import style from "./LoginRegisterForm.module.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useDispatch, useSelector, useStore } from "react-redux";
import Loader from "shared/ui/Loader";
import { getRegister } from "../../model/selectors/getRegister/getRegister";
import { getLogin } from "features/AuthByEmail/model/selectors/getLogin/getLogin";
import { ReduxStoreWithManager } from "app/providers/StoreProvider/config/StateShema";
import { loginReducer } from "features/AuthByEmail/model/slice/LoginSlice";
import { registerReducer } from "features/AuthByEmail/model/slice/RegisterSlice";

const LoginRegisterForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;
  const isLoadingLogin = useSelector(getLogin)?.isLoading;
  const isLoadingRegister = useSelector(getRegister)?.isLoading;

  useEffect(() => {
    store.reducerManager.add("login", loginReducer);
    store.reducerManager.add("register", registerReducer);
    dispatch({ type: "init login and register" });
    return () => {
      store.reducerManager.remove("login");
      store.reducerManager.remove("register");
      dispatch({ type: "delete login and register" });
    };
  }, []);

  return (
    <article className={isSignUp ? style.Click : ""}>
      <div className={style.Titles}>
        <h3 onClick={() => setIsSignUp(true)}>Sign Up</h3>
        <h3 onClick={() => setIsSignUp(false)}>Log In</h3>
      </div>

      <label htmlFor="reg-log"></label>
      <div className={style.card3DWrap}>
        <div className={style.card3DWrapper}>
          <div className={style.cardFront}>
            {isLoadingLogin ? <Loader /> : <LoginForm />}
          </div>
          <div className={style.cardBack}>
            {isLoadingRegister ? <Loader /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </article>
  );
};

export default LoginRegisterForm;

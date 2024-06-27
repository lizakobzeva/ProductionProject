import { getAuthData } from "entities/User/model/selectors/GetAuthData";
import { logout } from "entities/User/model/slice/UserSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import Button from "shared/ui/Button";
import style from "./ProfileCard.module.scss";

const ProfileCard = () => {
  const name = useSelector(getAuthData)?.name;
  const avatar = useSelector(getAuthData)?.avatar;
  const email = useSelector(getAuthData)?.email;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className={style.ProfileCard}>
      <div className={style.ProfileCardInfo}>
        <h3>Name: {name}</h3>
        <h3>Avatar: {avatar}</h3>
        <h3>Email: {email}</h3>
      </div>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </div>
  );
};

export default ProfileCard;

import style from "./Avatar.module.scss";
import { Animals, AvatarIcons } from "./AvatarTyps";
import { Link } from "react-router-dom";

interface AvatarProps {
  UserName: string;
  UserAvatar: Animals;
}
const Avatar = ({ UserName, UserAvatar }: AvatarProps) => {
  return (
    <Link className={style.Avatar} to={"/profile"}>
      <p>{UserName}</p>
      {AvatarIcons[UserAvatar]}
    </Link>
  );
};

export default Avatar;

import Chameleon from "shared/assets/chameleon.svg";
import style from "./Avatar.module.scss";
import { Animals, AvatarIcons } from "./AvatarTyps";

interface AvatarProps {
  UserName: string;
  UserAvatar: Animals;
}
const Avatar = ({ UserName, UserAvatar }: AvatarProps) => {
  return (
    <div className={style.Avatar}>
      <p>{UserName}</p>
      {AvatarIcons[UserAvatar]}
    </div>
  );
};

export default Avatar;

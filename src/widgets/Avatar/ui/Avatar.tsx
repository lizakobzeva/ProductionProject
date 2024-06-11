import Chameleon from "shared/assets/chameleon.svg";
import style from "./Avatar.module.scss";

interface AvatarProps {
  UserName: string;
}
const Avatar = ({ UserName }: AvatarProps) => {
  return (
    <div className={style.Avatar}>
      <p>{UserName}</p>
      <Chameleon />
    </div>
  );
};

export default Avatar;

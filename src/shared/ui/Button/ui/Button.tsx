import React, { ReactNode } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={style.button}>{children}</button>;
};

export default Button;

import { ReactNode } from "react";
import style from "./Modal.module.scss";
interface ModalProps {
  children?: ReactNode;
  isOpend: boolean;
  onClose?: () => void;
}
const Modal = ({ children, isOpend = false, onClose }: ModalProps) => {
  const OnContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const CloseHandler = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    isOpend && (
      <div className={style.Modal}>
        <div className={style.overlay} onClick={CloseHandler}>
          <div className={style.content} onClick={OnContentClick}>
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;

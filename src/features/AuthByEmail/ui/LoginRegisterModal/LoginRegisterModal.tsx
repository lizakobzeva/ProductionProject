import Modal from "shared/ui/Modal";

import { ReactNode, Suspense } from "react";
import { LoginRegisterForm } from "../LoginRegisterForm/LoginRegisterForm.async";
import Loader from "shared/ui/Loader";

interface LoginRegisterModalProps {
  children?: ReactNode;
  isOpend: boolean;
  onClose?: () => void;
}
const LoginRegisterModal = ({
  children,
  isOpend = false,
  onClose,
}: LoginRegisterModalProps) => {
  return (
    <Modal isOpend={isOpend} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        {isOpend && <LoginRegisterForm />}
      </Suspense>
    </Modal>
  );
};

export default LoginRegisterModal;

import style from "./LoginRegisterForm.module.scss";
import Button from "shared/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RegisterByEmail } from "features/AuthByEmail/model/services/RegisterByEmail/RegisterByEmail";
import { getRegister } from "features/AuthByEmail/model/selectors/getRegister/getRegister";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const error = useSelector(getRegister)?.error;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const dataReg = {
      name: data.name,
      email: data.email,
      password: data.password,
      likedPosts: [""],
    };
    dispatch(RegisterByEmail(dataReg));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.centerWrap}>
      {error && <h4 className={style.errorTitle}>Ошибка при регистрации</h4>}
      <h4 className={style.cardTitle}>Sign Up</h4>
      <div className={style.formGroup}>
        <input
          {...register("name", { required: true })}
          type="text"
          className={style.formStyle}
          placeholder="Your Name"
          maxLength={15}
        />
      </div>
      <div className={style.formGroup}>
        <input
          {...register("email", { required: true })}
          type="email"
          className={style.formStyle}
          placeholder="Your Email"
          maxLength={30}
        />
      </div>
      <div className={style.formGroup}>
        <input
          {...register("password", { required: true })}
          type="password"
          className={style.formStyle}
          placeholder="Your Password"
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default RegisterForm;

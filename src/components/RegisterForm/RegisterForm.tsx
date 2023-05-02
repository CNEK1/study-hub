import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import styles from "./RegisterForm.module.css";
import { useForm } from "react-hook-form";
import cn from "classnames";
import { useState } from "react";
import { IRootState, useAppDispatch } from "../../store";
import { registerUser } from "../../store/auth/authCreators";
import { RegisterFormProps } from "./RegisterForm.props";
import { useSelector } from "react-redux";
import { IRegisterForm } from "./RegisterForm.interface";

const RegisterForm = ({
  className,
  ...props
}: RegisterFormProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegisterForm>();
  const [error, setError] = useState<string>();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const isReg = useSelector((state: IRootState) => !!state.reg.authDate.name);

  const onSubmit = async () => {
    await dispatch(
      registerUser({
        email,
        name,
        password,
        roles: "User",
      })
    );
    try {
      if (isReg) {
        navigate("/login");
        reset();
      } else {
        setError("Some Error");
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={(cn(styles.someForm), className)} {...props}>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel}>
            <Input
              type="text"
              className={styles.inputField}
              placeholder="Username"
              {...register("name", {
                required: { value: true, message: "Type correct name!" },
              })}
              error={errors.name}
              onChange={(e) => setName(e.target.value)}
              value={name}
              aria-invalid={errors.name ? true : false}
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel}>
            <Input
              type="password"
              className={styles.inputField}
              placeholder="Password"
              {...register("password", {
                required: { value: true, message: "Type correct password!" },
              })}
              error={errors.password}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              aria-invalid={errors.password ? true : false}
            />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel}>
            <Input
              type="text"
              className={styles.inputField}
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "Type correct email!" },
              })}
              error={errors.email}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              aria-invalid={errors.email ? true : false}
            />
          </label>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Create Account
          </button>
        </div>
        <div className={styles.account}>
          Already have an account?
          <Link to={"/login"}>
            <span>Login</span>
          </Link>
        </div>
      </div>
      {error && (
        <div className={cn(styles.error, styles.panel)} role="alert">
          Something wrong try to reload a page...
          <button
            onClick={() => setError(undefined)}
            className={styles.close}
            aria-label="Close"
          >
            X
          </button>
        </div>
      )}
    </form>
  );
};

export default RegisterForm;

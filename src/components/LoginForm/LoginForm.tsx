import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { ILoginForm } from "./LoginForm.interface";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import { IRootState, useAppDispatch } from "../../store";
import { loginUser } from "../../store/auth/authCreators";
import { useSelector } from "react-redux";
import cn from "classnames";
import { LoginFormProps } from "./LoginForm.props";

const LoginForm = ({ className, ...props }: LoginFormProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginForm>();
  const [error, setError] = useState<string>();
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authDate.accessToken
  );

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    await dispatch(loginUser({ email, password }));
    try {
      if (isLoggedIn) {
        navigate("/");
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
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "Type an email" },
              })}
              error={errors.email}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              aria-invalid={errors.email ? true : false}
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
                required: { value: true, message: "Type a password" },
              })}
              error={errors.password}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              aria-invalid={errors.password ? true : false}
            />
          </label>
        </div>
        <div className={styles.buttonContainer}>
          <Button type="submit" appereance="primary" className={styles.button}>
            Login
          </Button>
        </div>
        <div className={styles.account}>
          Don't have an account?
          <Link to={"/register"}>
            <span>Register</span>
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

export default LoginForm;

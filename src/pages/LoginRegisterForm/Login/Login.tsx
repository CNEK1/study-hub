import LoginForm from "../../../components/LoginForm/LoginForm";
import styles from "../LoginRegisterForm.module.css";

const Login = (): JSX.Element => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSideText}>
        <h1>Some Logo</h1>
        <p>Join the platform to get more exicting features.</p>
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

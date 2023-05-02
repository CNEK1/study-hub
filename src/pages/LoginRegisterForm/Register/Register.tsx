import RegisterForm from "../../../components/RegisterForm/RegisterForm";
import styles from "../LoginRegisterForm.module.css";

const Register = (): JSX.Element => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSideText}>
        <h1>Some Logo</h1>
        <p>Join the platform to get more exicting features.</p>
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Create Account</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;

import { Button, Input } from "antd";
import styles from "./styles.module.scss";
import { useFormikContext } from "formik";
import { LoginValues } from "@/pages/auth";

type Props = {};

function LoginForm({}: Props) {
  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormikContext<LoginValues>();
  return (
    <section className={styles["form-login"]}>
      <img
        className={styles["form-login__logo"]}
        src="/assets/images/logo.png"
        alt="logo"
      />
      <div className={styles["form-login__wrapper-title"]}>
        <h2 className={styles["form-login__title"]}>Welcome Back</h2>
        <p className={styles["form-login__subtitle"]}>Login to continue</p>
      </div>
      <form onSubmit={handleSubmit} className={styles["form-login__form"]}>
        <div className={styles["form-login__form-input"]}>
          <Input
            placeholder="Username"
            status="error"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <p className={styles["form-login__form-error"]}>error message</p>
        </div>
        <div className={styles["form-login__form-input"]}>
          <Input.Password
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <p className={styles["form-login__form-error"]}>error message</p>
        </div>
        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </form>
    </section>
  );
}

export default LoginForm;

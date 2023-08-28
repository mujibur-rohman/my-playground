import { Alert, Button, Input } from "antd";
import styles from "./styles.module.scss";
import { useFormikContext } from "formik";
import { LoginModel } from "@/models/auth";
import { useSession } from "next-auth/react";

type Props = {
  setErrorServer: (message: string) => void;
  errorServer: string;
};

function LoginForm({ errorServer, setErrorServer }: Props) {
  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    isSubmitting,
  } = useFormikContext<LoginModel>();

  const session = useSession();
  console.log("SESSION", session);

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
        {errorServer && (
          <Alert
            message={errorServer}
            type="error"
            afterClose={() => {
              setErrorServer("");
            }}
            closable
            showIcon
          />
        )}
        <div className={styles["form-login__form-input"]}>
          <Input
            placeholder="Username"
            status={errors.username && touched.username ? "error" : ""}
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username && (
            <p className={styles["form-login__form-error"]}>
              {errors.username}
            </p>
          )}
        </div>
        <div className={styles["form-login__form-input"]}>
          <Input.Password
            placeholder="Password"
            status={errors.password && touched.password ? "error" : ""}
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className={styles["form-login__form-error"]}>
              {errors.password}
            </p>
          )}
        </div>
        <Button htmlType="submit" type="primary" loading={isSubmitting}>
          Login
        </Button>
      </form>
    </section>
  );
}

export default LoginForm;

import LoginForm from "@/components/form/login/login";
import { useFormik, FormikConfig, FormikProvider } from "formik";

type Props = {};

export type LoginValues = {
  username: string;
  password: string;
};

const formikConfig: FormikConfig<LoginValues> = {
  initialValues: {
    username: "",
    password: "",
  },
  onSubmit: async (values) => {
    console.log(values);
  },
};

function Login({}: Props) {
  const formik = useFormik<LoginValues>(formikConfig);
  return (
    <section
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormikProvider value={formik}>
        <LoginForm />
      </FormikProvider>
    </section>
  );
}

export default Login;

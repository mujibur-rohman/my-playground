import LoginForm from "@/components/form/login/login";
import { LoginModel } from "@/models/auth";
import { useFormik, FormikConfig, FormikProvider } from "formik";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import * as yup from "yup";

type Props = {};

function Login({}: Props) {
  const [errorServer, setErrorServer] = useState<string>("");

  const formikConfig: FormikConfig<LoginModel> = {
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required().trim(),
      password: yup.string().required().trim().max(16),
    }),
    onSubmit: async (values) => {
      try {
        const res = await signIn("credentials", {
          username: values.username,
          password: values.password,
          redirect: false,
        });
        if (!res?.ok) {
          throw new Error(res?.error as string);
        }
      } catch (error: any) {
        setErrorServer(error.message);
      }
    },
  };

  const handleErrorServer = useCallback(
    (message: string) => {
      setErrorServer(message);
    },
    [errorServer]
  );
  const formik = useFormik<LoginModel>(formikConfig);
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
        <LoginForm
          errorServer={errorServer}
          setErrorServer={handleErrorServer}
        />
      </FormikProvider>
    </section>
  );
}

export default Login;

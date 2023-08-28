import LoginForm from "@/components/form/login/login";
import { LoginModel } from "@/models/auth";
import { useFormik, FormikConfig, FormikProvider } from "formik";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import * as yup from "yup";

type ServerSideProps = {
  session: Session | null;
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<{ props: ServerSideProps }> {
  const session = await getSession(context);

  return {
    props: {
      session: session,
    },
  };
}

type Props = {};

function Login({}: Props) {
  const [errorServer, setErrorServer] = useState<string>("");
  const router = useRouter();
  const session = useSession();

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
        router.push("/");
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
      {session.status === "authenticated" ? (
        <p>You are Logged</p>
      ) : (
        <FormikProvider value={formik}>
          <LoginForm
            errorServer={errorServer}
            setErrorServer={handleErrorServer}
          />
        </FormikProvider>
      )}
    </section>
  );
}

export default Login;

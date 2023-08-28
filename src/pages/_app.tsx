import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { ConfigProvider } from "antd";
import theme from "@/themes/theme-config";
import MainLayout from "@/components/layouts/main-layout";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <MainLayout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MainLayout>
    </ConfigProvider>
  );
}

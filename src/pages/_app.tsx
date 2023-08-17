import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ConfigProvider } from "antd";
import theme from "@/themes/theme-config";
import MainLayout from "@/components/layouts/main-layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ConfigProvider>
  );
}

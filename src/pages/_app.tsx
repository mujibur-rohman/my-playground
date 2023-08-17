import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { ConfigProvider } from "antd";
import theme from "@/themes/theme-config";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <main className={`${montserrat.className} flex`}>
        <Component {...pageProps} />
      </main>
    </ConfigProvider>
  );
}

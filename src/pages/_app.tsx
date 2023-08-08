import Sidebar from "@/components/layouts/sidebar/sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.className} flex`}>
      <Sidebar />
      <div className="w-full">
        <Component {...pageProps} />
      </div>
    </main>
  );
}

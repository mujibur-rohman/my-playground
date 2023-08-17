import { useState, useCallback } from "react";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <main className={`${montserrat.className} flex w-full`}>
      <Sidebar open={open} openSidebar={toggleSidebar} />
      <div className="w-full">
        <Navbar openSidebar={toggleSidebar} />
        {props.children}
      </div>
    </main>
  );
};

export default MainLayout;

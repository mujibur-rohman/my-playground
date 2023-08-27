import { useState, useCallback } from "react";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";
import variable from "@/styles/variables.module.scss";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  const toggleSidebar = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <main style={{ display: "flex", background: variable.colorBackground }}>
      {auth && <Sidebar open={open} openSidebar={toggleSidebar} />}
      <div style={{ width: "100%" }}>
        {auth && <Navbar openSidebar={toggleSidebar} />}
        <div>{props.children}</div>
      </div>
    </main>
  );
};

export default MainLayout;

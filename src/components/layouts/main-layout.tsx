import { useState, useCallback } from "react";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <section className="flex w-full">
      <Sidebar open={open} openSidebar={toggleSidebar} />
      <div className="w-full">
        <Navbar openSidebar={toggleSidebar} />
        {props.children}
      </div>
    </section>
  );
};

export default MainLayout;

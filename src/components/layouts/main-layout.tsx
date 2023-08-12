import { useState, useCallback } from "react";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const [open, setOpen] = useState(false);

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
      {/* Backdrop */}
      <div
        className={cn(
          "md:hidden fixed bg-black/20 top-0 bottom-0 right-0 left-0 transition-opacity",
          { "opacity-0 scale-0": !open },
          { "opacity-100 scale-100": open }
        )}
        onClick={toggleSidebar}
      ></div>
    </section>
  );
};

export default MainLayout;

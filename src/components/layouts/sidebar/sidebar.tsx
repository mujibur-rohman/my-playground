import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";

type Props = {};

const Sidebar = (props: Props) => {
  const [open, setOpen] = useState(true);
  return (
    <aside className="hidden md:block">
      <div
        className={cn(styles.sidebar, {
          [styles.openSidebar]: open,
          "-translate-x-[4rem] md:translate-x-0 md:w-[4rem]": !open,
        })}
      >
        <div
          className="h-16 flex items-center justify-center border-b-2 mx-2"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <img className="w-28" src="/assets/images/logo.png" alt="blogue" />
          ) : (
            <img
              className="w-9"
              src="/assets/images/logo-brand.png"
              alt="blogue"
            />
          )}
        </div>
        <div className="flex flex-col h-full">
          <div className="px-2 overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-[70%]">
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
            <h1>dwd</h1>
          </div>
          <div className="text-sm bg-red-100 h-[30%] z-50 my-auto whitespace-pre w-full font-medium">
            <h1>dwd</h1>
            <h1>dwd</h1>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

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
          <div className="px-2 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-[70%]">
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
          <div className="grow-[4] text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
            <div className="flex border-y border-slate-300 p-4 items-center justify-between">
              <div>
                <p>Spark</p>
                <small>No-cost $0/month</small>
              </div>
              <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                Upgrade
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

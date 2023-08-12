import { cn } from "@/lib/utils";
import { ArrowLeftFromLine, LayoutDashboard, Newspaper } from "lucide-react";
import styles from "./styles.module.css";

type Props = {
  open: boolean;
  openSidebar: () => void;
};

const Sidebar = ({ open, openSidebar }: Props) => {
  return (
    <div
      className={cn(styles.sidebar, {
        [styles.openSidebar]: open,
        "-translate-x-[4rem] md:translate-x-0 md:w-[4rem]": !open,
      })}
    >
      <div className="relative h-16 flex items-center justify-center border-b-2 mx-2">
        {open ? (
          <img className="w-28" src="/assets/images/logo.png" alt="blogue" />
        ) : (
          <img
            className="w-9 hidden md:block"
            src="/assets/images/logo-brand.png"
            alt="blogue"
          />
        )}
        <ArrowLeftFromLine
          className={cn(
            "text-ring cursor-pointer absolute opacity-100 md:opacity-0 right-0"
          )}
          onClick={() => {
            openSidebar();
          }}
        />
      </div>
      <div className="flex flex-col h-full">
        <ul className={styles.nav}>
          <li className={cn(styles["nav__item"], styles["nav__item--active"])}>
            <LayoutDashboard />
            <span className={cn({ hidden: !open })}>Dashboard</span>
          </li>
          <li className={styles["nav__item"]}>
            <Newspaper />
            <span
              className={cn({
                hidden: !open,
              })}
            >
              My Articles
            </span>
          </li>
        </ul>
        <div className="text-sm bg-red-100 h-[30%] z-50 my-auto whitespace-pre w-full font-medium">
          <h1>dwd</h1>
          <h1>dwd</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

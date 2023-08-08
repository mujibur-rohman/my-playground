import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";

type Props = {};

const Sidebar = (props: Props) => {
  const [open, setOpen] = useState(true);
  return (
    <aside>
      <div
        className={cn(styles.sidebar, {
          [styles.openSidebar]: open,
          "-translate-x-[4rem] md:translate-x-0 md:w-[4rem]": !open,
        })}
      >
        <div className="h-14 bg-accent"></div>
      </div>
    </aside>
  );
};

export default Sidebar;

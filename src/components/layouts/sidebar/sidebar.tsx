import { cn } from "@/lib/utils";
import React from "react";
import { ArrowLeftFromLine, LayoutDashboard, Newspaper } from "lucide-react";
import styles from "./styles.module.scss";

type Props = {
  open: boolean;
  openSidebar: () => void;
};

const Sidebar = ({ open, openSidebar }: Props) => {
  return (
    <React.Fragment>
      {/* Backdrop */}
      <div
        className={cn(
          styles.backdropSidebar,
          { [styles.openBackdrop]: open },
          { [styles.closeBackdrop]: !open }
        )}
        onClick={openSidebar}
      ></div>
      <div
        className={cn(styles.sidebar, {
          [styles.openSidebar]: open,
          [styles.closeSidebar]: !open,
        })}
      >
        <div style={{ padding: "0 1rem" }}>
          <div className={styles.header}>
            {/* {open ? ( */}
            <img
              src="/assets/images/logo.png"
              className={styles.logoOpened}
              alt="blogue"
            />
            {/* ) : ( */}
            {/* <img
                src="/assets/images/logo-brand.png"
                className={styles.logoClosed}
                alt="blogue"
              />
            )} */}
            <ArrowLeftFromLine
              className={styles.arrow}
              onClick={() => {
                openSidebar();
              }}
            />
          </div>
        </div>
        <div className={styles.body}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <LayoutDashboard />
              <span>Dashboard</span>
            </li>
            <li className={styles.menuItem}>
              <Newspaper />
              <span>My Articles</span>
            </li>
            <li className={styles.menuItem}>
              <Newspaper />
              <span>My Articles</span>
            </li>
            <li className={styles.menuItem}>
              <Newspaper />
              <span>My Articles</span>
            </li>
            <li className={styles.menuItem}>
              <Newspaper />
              <span>My Articles</span>
            </li>
            <li className={styles.menuItem}>
              <Newspaper />
              <span>My Articles</span>
            </li>
            <li className={styles.menuItem}>
              <Newspaper />
              <span>My Articles</span>
            </li>
            <li className={styles.menuItem}>
              <Newspaper />
              <span>My Articles</span>
            </li>
            <li className={styles.menuItem}>
              <Newspaper />
              <span>My Articles</span>
            </li>
          </ul>
        </div>
        <div className={styles.footer}>
          <div>sd</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;

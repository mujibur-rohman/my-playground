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
          "md:hidden fixed bg-black/20 top-0 bottom-0 right-0 left-0 transition-opacity",
          { "opacity-0 scale-0": !open },
          { "opacity-100 scale-100": open }
        )}
        // onClick={openSidebar}
      ></div>
      <div className={styles.sidebar}>
        <div style={{ padding: "0 1rem" }}>
          <div className={styles.header}>
            {open ? (
              <img
                src="/assets/images/logo.png"
                className={styles.logoOpened}
                alt="blogue"
              />
            ) : (
              <img
                src="/assets/images/logo-brand.png"
                className={styles.logoClosed}
                alt="blogue"
              />
            )}
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

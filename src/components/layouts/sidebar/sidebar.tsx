import { cn } from "@/lib/utils";
import React from "react";
import { ArrowLeftFromLine } from "lucide-react";
import styles from "./styles.module.scss";
import { MENU_ITEM } from "@/services/constant";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  open: boolean;
  openSidebar: () => void;
};

const Sidebar = ({ open, openSidebar }: Props) => {
  const { pathname } = useRouter();
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
            <img
              src="/assets/images/logo.png"
              className={cn({
                [styles.logoOpened]: open,
                [styles.logoClosed]: !open,
              })}
              alt="blogue"
            />
            <img
              src="/assets/images/logo-title.png"
              className={cn({
                [styles.logoTitleOpened]: open,
                [styles.logoTitleClosed]: !open,
              })}
              alt="blogue"
            />
            <ArrowLeftFromLine
              className={styles.arrow}
              onClick={() => {
                openSidebar();
              }}
            />
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.menu}>
            <h3
              className={cn(styles.titleMenu, {
                [styles.titleMenu__closed]: !open,
              })}
            >
              MENU
            </h3>
            {MENU_ITEM.map((menu) => (
              <Link
                key={menu.id}
                href={menu.path}
                className={cn(styles.menuItem, {
                  [styles.menuItem__active]:
                    pathname === menu.path && pathname.startsWith(menu.path),
                })}
              >
                <menu.icon size={24} />
                <span className={cn({ [styles.close]: !open })}>
                  {menu.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {/* <div className={styles.footer}>
          <div>sd</div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Sidebar;

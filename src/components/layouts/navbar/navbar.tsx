import { Avatar, Dropdown, MenuProps } from "antd";
import { ChevronDown, LogOut, Menu, User } from "lucide-react";
import styles from "./styles.module.scss";
import { signOut } from "next-auth/react";

type Props = {
  openSidebar: () => void;
};

const Navbar = ({ openSidebar }: Props) => {
  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "2") {
      signOut();
    }
  };

  const items: MenuProps["items"] = [
    {
      label: "Profile",
      key: "1",
      icon: <User size={15} />,
    },
    {
      label: "Logout",
      key: "2",
      icon: <LogOut size={15} />,
    },
  ];

  return (
    <nav className={styles.navbar}>
      <Menu
        className={styles.hamburger}
        onClick={() => {
          openSidebar();
        }}
      />
      <Dropdown menu={{ items, onClick }}>
        <div className={styles.avatar}>
          <Avatar style={{ cursor: "pointer" }}>M</Avatar>
          <ChevronDown size={15} />
        </div>
      </Dropdown>
    </nav>
  );
};

export default Navbar;

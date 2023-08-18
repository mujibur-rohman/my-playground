import { Avatar } from "antd";
import { Menu } from "lucide-react";
import styles from "./styles.module.scss";

type Props = {
  openSidebar: () => void;
};

const Navbar = ({ openSidebar }: Props) => {
  return (
    <nav className={styles.navbar}>
      <Menu
        className={styles.hamburger}
        onClick={() => {
          openSidebar();
        }}
      />

      <Avatar>M</Avatar>
    </nav>
  );
};

export default Navbar;

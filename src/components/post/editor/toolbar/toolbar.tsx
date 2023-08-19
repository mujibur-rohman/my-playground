import { Paperclip } from "lucide-react";
import styles from "./styles.module.scss";
type Props = {};

function Toolbar({}: Props) {
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <div className={styles.youtube}>
          <Paperclip size={14} />
          <span>Youtube</span>
        </div>
      </div>
      <div className={styles.right}>s</div>
    </div>
  );
}

export default Toolbar;

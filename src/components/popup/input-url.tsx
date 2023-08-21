import { Button, Input } from "antd";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

function InputUrl({ children }: Props) {
  const [open, setOpen] = useState<Boolean>(true);
  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={() => {
          setOpen(!open);
        }}
      >
        {children}
      </div>
      <div
        className={cn(styles["input-url"], {
          [styles.open]: open,
        })}
      >
        <label htmlFor="URL">URL </label>
        <Input id="URL" placeholder="Enter url .." size="small" />
        <Button size="small">Insert</Button>
        <div className={styles.arrow}></div>
      </div>
    </div>
  );
}

export default InputUrl;

import { Button, Input } from "antd";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import useClickOutside from "@/lib/hooks/useClickOutside";

type Props = {
  children: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit?: (() => void) | undefined;
  value: string;
};

function InputUrl({ children, onChange, handleSubmit, value }: Props) {
  const [open, setOpen] = useState<Boolean>(false);
  const ref = useClickOutside(() => {
    setOpen(false);
  });
  return (
    <div style={{ position: "relative" }} ref={ref}>
      <div
        onClick={() => {
          setOpen(!open);
        }}
      >
        {children}
      </div>
      <form
        className={cn(styles["input-url"], {
          [styles.open]: open,
        })}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit?.();
          setOpen(false);
        }}
      >
        <label htmlFor="URL">URL </label>
        <Input
          autoComplete="off"
          value={value}
          onChange={onChange}
          id="URL"
          placeholder="Enter url .."
          size="small"
        />
        <Button htmlType="submit" size="small">
          Insert
        </Button>
        <div className={styles.arrow}></div>
      </form>
    </div>
  );
}

export default InputUrl;

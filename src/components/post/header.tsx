import { Button } from "antd";
import styles from "./styles.module.scss";
import React, { useEffect, useRef } from "react";

type Props = {};

function Header({}: Props) {
  const inputTitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputTitleRef.current) {
      console.log(inputTitleRef);
      inputTitleRef.current.focus();
    }
  }, [inputTitleRef]);
  return (
    <React.Fragment>
      <div className={styles.headers}>
        <Button type="link">Save as Draft</Button>
        <Button type="primary">Publish</Button>
      </div>
      <div
        contentEditable
        placeholder="Type Title.."
        onInput={(e) => {
          // @ts-ignore
          console.log(e.target.innerText);
        }}
        className={styles["input-title"]}
        ref={inputTitleRef}
      ></div>
    </React.Fragment>
  );
}

export default Header;

import React from "react";
import { IButtons } from "./buttons.interface";
import styles from "./buttons.module.scss";
import classNames from "classnames";

export const Buttons = (props: any) => {
  const { text }: IButtons = props;
  const classnames = classNames(
    // styles,
    Object.keys(props).filter((k) => props[k] === true)
  );

  console.log("props in obj: ", props);
  console.log("props in array", Object.keys(props));
  console.log("styles:", styles);

  const classInArr = classnames.split(" ").map((x) => {
    if (x == "primary") {
      console.log(x, styles.primary);
      x.concat(styles.primary);
    } else {
      console.log(x, styles.secondary);
      x.concat(styles.secondary);
    }
  });

  console.log(classInArr);
  console.log(classnames);

  return <button className={classnames}>{text}</button>;
};

export default Buttons;

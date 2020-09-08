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
  console.log("classnames: ", classnames);

  const classNamesWithStyles = classnames.split(" ").map((c) => {
    return Object.keys(styles).map((s) => {
      if (s === c) {
        return (c += styles[s]);
      }
    });
  });

  var removeUndefinedFromArray: string[] = [];

  classNamesWithStyles.map((x) => {
    return x.map((z) => {
      if (z !== undefined) {
        removeUndefinedFromArray.push(z);
      }
    });
  });

  let completeClassNames = removeUndefinedFromArray.join(" ");
  console.log(completeClassNames);

  return <button className={completeClassNames}>{text}</button>;
};

export default Buttons;

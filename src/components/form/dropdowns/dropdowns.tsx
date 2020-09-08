import React from "react";
import { IDropdowns } from "./dropdowns.interface";
import styles from "./dropdowns.module.scss";
import classNames from "classnames";

export const Dropdowns = (props: any) => {
  const { options }: IDropdowns = props;
  const classnames = classNames(
    styles,
    Object.keys(props).filter((k) => props[k] === true)
  );

  return (
    <>
      <select className={classnames}>
        {options.map((item: string) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdowns;

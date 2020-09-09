import React from "react";
import { ILinks } from "./links.interface";
import styles from "./links.module.scss";
import classNames from "classnames";

export const Links = (props: any) => {
  const { text, href }: ILinks = props;
  const classnames = classNames(
    styles,
    Object.keys(props).filter((k) => props[k] === true)
  );

  return (
    <>
      <a className={classnames} href={href}>{text}</a>
    </>
  );
};

export default Links;


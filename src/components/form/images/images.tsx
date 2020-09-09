import React from "react";
import { IImages } from "./images.interface";
import styles from "./images.module.scss";
import classNames from "classnames";

export const Images = (props: any) => {
  const { src, alt }: IImages = props;
  const classnames = classNames(
    styles,
    Object.keys(props).filter((k) => props[k] === true)
  );

  return (
    <>
      <img src={src} alt={alt} className={classnames}/>
    </>
  );
};

export default Images;

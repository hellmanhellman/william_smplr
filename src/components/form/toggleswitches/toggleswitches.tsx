import React, { useState } from "react";
import { IToggleswitches } from "./toggleswitches.interface";
import styles from "./toggleswitches.module.scss";
import classNames from "classnames";
import { relative } from "path";

export const Toggleswitches = (props: any) => {
  const [isClicked, setisClicked] = useState<boolean>(false);

  const handleToggle = () => {
    setisClicked(!isClicked);
    console.log("u clicked the red button");
  };

  const {}: IToggleswitches = props;
  const classnames = classNames(
    //styles,
    Object.keys(props).filter((k) => props[k] === true)
  );

  const styleBigNotClicked = {
    height: "50px",
    width: "104px",
    backgroundColor: "white",
  };

  const styleBigClicked = {
    height: "50px",
    width: "104px",
    backgroundColor: "white",
  };

  const styleSmallNotClicked = {
    marginLeft: "2px",
    height: "50px",
    width: "50px",
    backgroundColor: "black",
    borderRadius: "100%",
  };

  const styleSmallClicked = {
    marginLeft: "50px",
    height: "50px",
    width: "50px",
    backgroundColor: "black",
    borderRadius: "100%",
  };

  return (
    <>
      <div
        onClick={handleToggle}
        style={isClicked ? styleBigClicked : styleBigNotClicked}
        id="big"
      >
        <div
          style={isClicked ? styleSmallClicked : styleSmallNotClicked}
          id="small"
        ></div>
      </div>
    </>
  );
};

export default Toggleswitches;

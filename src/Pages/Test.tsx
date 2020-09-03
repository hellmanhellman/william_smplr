import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "../ComponentLibrary/form/button";
import Input from "../ComponentLibrary/form/input";
import Dropdown from "../ComponentLibrary/form/dropdown";

// import "./william.scss";

const initialStateDropDownValues = ["volvo", "vw", "bmw"]

export const Test = () => {
  const [InputValue, setInputValue] = useState<string>("");
  const [FormInputValue, setFormInputValue] = useState<string>("");
  const [DropDownValue, setDropDownValue] = useState<string[]>(initialStateDropDownValues);

  const handleClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("u clicked the button");
  };

  const handleChangePW = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInputValue(e.target.value);
  };

  console.log(DropDownValue);

  return (
    <>
    {/* <button className="btn2 btn-red">hello</button> */}
      From /Pages/Test
      <br />
      <br />
      <Button text="click me" onclick={handleClick} />
      <br />
      <br />
      <Input
        placeholder="Enter your password"
        type="password"
        value={InputValue}
        handleChange={handleChangePW}
      />
      <h1 className="william">test</h1>
      <p>your password is: {InputValue}</p>
      <br />
      <br />
      <br />
      <div id="test_form">
        <form>
          <Input
            placeholder="Enter your name"
            type="text"
            value={FormInputValue}
            handleChange={handleChangeForm}
          />
          <br />
          <br />

          <Button
            primary
            text="Submit your name"
            onclick={() =>
              alert(`welcome ${FormInputValue} your name is saved!`)
            }
          />
        </form>
      </div>

      <Dropdown options={DropDownValue}/>
    </>
  );
};

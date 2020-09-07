import React from "react";
import { Inputs } from "./inputs";
import { Input } from "./inputs.interface";

export default { title: "Input" };

const inputAttributes: Input = {
  typeOfInput: "text",
  placeholder: "Enter Your Name:",
};

export const primary = () => (
  <Inputs
    primary
    type={inputAttributes.typeOfInput}
    placeholder={inputAttributes.placeholder}
  />
);

// Körs genom kommandot 'yarn run storybook'

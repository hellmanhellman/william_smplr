import React from "react";
import { Inputs } from "./inputs";
import { Input } from "./inputs.interface";

export default { title: "Input" };

// const inputAttributes: Input = {
//   type: "text",
//   placeholder: "Enter Your Name:",
// };

export const primaryText = () => (
  <Inputs
    primary
    type="text"
    placeholder="Enter Your name"
  />
);

export const primaryRadio = () => (
  <Inputs
    primary
    type="radio"
  />
);

export const primaryColor = () => (
  <Inputs
    primary
    type="color"
  />
);

export const primaryDate = () => (
  <Inputs
    primary
    type="date"
  />
);

export const primaryFile = () => (
  <Inputs
    primary
    type="file"
  />
);

export const primaryRange = () => (
  <Inputs
    primary
    type="range"
  />
);

export const primaryNumber = () => (
  <Inputs
    primary
    type="number"
  />
);

// Körs genom kommandot 'yarn run storybook'

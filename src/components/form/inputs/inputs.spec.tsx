import React from "react";
import { render } from "@testing-library/react";

import Inputs from "./inputs";

describe("Input", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Inputs type="text" placeholder="Enter Your Name" />
    );
    expect(baseElement).toBeTruthy();
  });
});

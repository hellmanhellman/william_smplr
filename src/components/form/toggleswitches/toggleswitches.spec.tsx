import React from "react";
import { render } from "@testing-library/react";

import Toggleswitches from "./toggleswitches";

describe("Toggleswitch", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Toggleswitches />);
    expect(baseElement).toBeTruthy();
  });
});

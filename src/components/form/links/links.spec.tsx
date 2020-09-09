import React from "react";
import { render } from "@testing-library/react";

import Links from "./links";

describe("Link", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Links href="https://google.com" text="Google"/>
    );
    expect(baseElement).toBeTruthy();
  });
});

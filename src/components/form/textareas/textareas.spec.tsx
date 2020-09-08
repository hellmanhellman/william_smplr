import React from "react";
import { render } from "@testing-library/react";

import Textareas from "./textareas";

describe("Textareas", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Textareas placeholder="This is a placeholder inside a textarea" />
    );
    expect(baseElement).toBeTruthy();
  });
});

import React from "react";
import { render } from "@testing-library/react";

import Images from "./images";

describe("Image", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Images src="https://www.w3schools.com/images/lamp.jpg" alt="Lamp"/>
    );
    expect(baseElement).toBeTruthy();
  });
});

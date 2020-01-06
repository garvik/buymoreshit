import React from "react";
import { render } from "@testing-library/react";
import TopNavigation from "./TopNavigation";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  const { getByText } = render(
    <BrowserRouter>
      <TopNavigation />
    </BrowserRouter>
  );
  const linkElement = getByText(/Buy More Shit/i);
  expect(linkElement).toBeInTheDocument();
});

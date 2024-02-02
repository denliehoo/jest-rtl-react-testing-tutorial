// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../test-utils";

import { MuiMode } from "./mui-mode";
// import { AppProviders } from "../../providers/app-providers";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    // this was previous using the  import { render, screen } from "@testing-library/react";
    // render(<MuiMode />, {
    //   wrapper: AppProviders, // here we must specify the wrapper for the provider
    // });
    // now instead, we use our custom render function so that we dont have to repeat code
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });

  test("renders text in white color for dark mode", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" });
  });
});

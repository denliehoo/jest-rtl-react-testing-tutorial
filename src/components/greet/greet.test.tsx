/* Requirements: 
  Greet should render the text hello and if a name is passed into the component
  it should render hello {name}
*/

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("Greet renders with a name", () => {
    render(<Greet name="World" />);
    const textElement = screen.getByText("Hello World");
    expect(textElement).toBeInTheDocument();
  });
});

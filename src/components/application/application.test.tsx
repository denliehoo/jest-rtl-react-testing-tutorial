import { render, screen } from "@testing-library/react";
import { Application } from "./application";

// This file is mainly for Single getBy queries

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />); // creates the virtual DOM

    /** getByRole */

    const pageHeading = screen.getByRole("heading", {
      level: 1, // ensure h1
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2, // ensure h2
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" }); // we use the label "Name"
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "The Bio" }); // label for it is "The Bio"
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();
    expect(submitElement).toBeDisabled();

    /** getByLabelText */
    // this is an alternative to using getByRole. However, getByRole is usually preferred
    // we can use a selector option to further specify what the html type is
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    const bioElement2 = screen.getByLabelText("The Bio");
    expect(bioElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    /** getByPlaceholderText */

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    /** getByText */
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const paragraphElement2 = screen.getByText(/All fields are/i);
    expect(paragraphElement2).toBeInTheDocument();

    const paragraphElement3 = screen.getByText("All fields are", {
      exact: false,
    });
    expect(paragraphElement3).toBeInTheDocument();

    /** getByDisplayValue */
    // searches the value if e.g. an input field
    const nameElement4 = screen.getByDisplayValue("NameHere");
    expect(nameElement4).toBeInTheDocument();

    /** getByAltText */

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    /** getByTitle */

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    /** getByTestId */
    // use this as a last resort if we really can't use any of the other queries. This is because we have to add in to our component code just for the sake of testing it which isn't good.

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    //
  });
});

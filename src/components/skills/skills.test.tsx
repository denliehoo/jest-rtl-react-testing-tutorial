import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  /** queryBy vs getBy*/
  // getBy will throw an error and test will fail is we try to find something inside the document that doesn't exist.
  // sometimes, we want to test that an element is NOT in the document.
  // to do this, we can use queryBy instead, which returns the matching node for a query if it exists, or returns null if no elemenets match
  // then, we can chain a expect(element).not.toBeInTheDocument() which asserts that the element isn't in the document. Thus, test pass if it isn't and fails if it is.

  // Here, since we are conditionally rendering the 2 buttons and the login button is rendered by default, then the log in button should exist while the start learning button shouldn't

  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start Learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  /** findBy*/
  // For example, when we do a useEffect and fetch data from a server. Initially, no data is present. But after awhile, once data has been fetched, the element should be rendered.
  // getBy and queryBy cannot be used in this case Instead,
  // findBy is useful for appearing/disappearing data.

  // Here, since we have set a useEffect that updates logIn to true after 1000, which, causes the button to change to the startlearningButton to be rendered instead of the Login button.
  // if we wait 2000ms, we can be sure that the start learning button should be rendered instead of to Login button
  test("Start Learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      // by default, the value in which it timeout (as in it stops waiting for something to be rendered/disappear) is 1000s. If we want, we can increase the timeout
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });

  //
});

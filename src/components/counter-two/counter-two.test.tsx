import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./counter-two";

test("renders correctly", () => {
  render(<CounterTwo count={0} />);
  const textElement = screen.getByText("Counter Two");
  expect(textElement).toBeInTheDocument();
});

test("handlers are called", async () => {
  user.setup();
  // simulate a function that we can pass to our component
  const incrementHandler = jest.fn();
  const decrementHandler = jest.fn();
  render(
    <CounterTwo
      count={0}
      handleIncrement={incrementHandler}
      handleDecrement={decrementHandler}
    />
  );
  const incrementButton = screen.getByRole("button", { name: "Increment" });
  const decrementButton = screen.getByRole("button", { name: "Decrement" });
  // simulate clicking the button
  await user.click(incrementButton);
  await user.click(decrementButton);
  // test to see whether our function has been invoked
  expect(incrementHandler).toHaveBeenCalledTimes(1);
  expect(decrementHandler).toHaveBeenCalledTimes(1);
});

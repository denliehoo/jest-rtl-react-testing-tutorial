import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    // we are unable to use the usual render(component) since hooks can only be called in functional components
    // instead, we use renderHook which returns an object which contains result
    // result can be further destructured to get the values in our react hooks
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      // sets the initial props for our hook
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter);
    // we can simulate using hook functions by doing result.current.fn()
    // furthermore, we need to wrap it with act() to ensure that our tests gets the latest state update
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});

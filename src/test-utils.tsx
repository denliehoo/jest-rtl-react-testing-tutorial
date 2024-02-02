import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AppProviders } from "./providers/app-providers";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AppProviders, ...options });
// here we must specify the wrapper for the providers

export * from "@testing-library/react";
export { customRender as render };

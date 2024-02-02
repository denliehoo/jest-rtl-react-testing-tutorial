import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    // we can wrap other providers, e.g. redux, etc here
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

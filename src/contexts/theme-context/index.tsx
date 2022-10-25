import { ReactNode } from "react";
import { THEME } from "contants";
import { ThemeProvider } from "styled-components";

type ThemeContextProps = {
  children: ReactNode;
  theme: typeof THEME["dark" | "light"];
};

export default function ThemeContext({ children, theme }: ThemeContextProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

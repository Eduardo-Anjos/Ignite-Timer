import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/Default";
import { GlobalStyle } from "./styles/themes/global";
import { Button } from "./components//Button";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Helow word</h1>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
    </ThemeProvider>
  );
}

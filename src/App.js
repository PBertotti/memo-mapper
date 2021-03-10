import { Menu } from "./components/Menu";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Menu />
      </ThemeProvider>
    </div>
  );
}

export default App;

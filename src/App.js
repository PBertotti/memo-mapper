import { Menu } from "./components/Menu";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core";
import { Balloon } from "./components/Balloon";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Menu />
        <Balloon />
        <Balloon />
      </ThemeProvider>
    </div>
  );
}

export default App;

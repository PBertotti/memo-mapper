import { Menu } from "./components/";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core";
import { MapCanvas } from "./screens/MapCanvas";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Menu>
          <MapCanvas />
        </Menu>
      </ThemeProvider>
    </div>
  );
}

export default App;

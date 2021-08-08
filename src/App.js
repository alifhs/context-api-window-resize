import logo from "./logo.svg";
import "./App.css";

import MobileContextProvider from "./context/MobileContext";
import { TestComponent } from "./components/TestComponent";

function App() {
  return (
    <div className="App">
      <MobileContextProvider>
        <TestComponent />
      </MobileContextProvider>
    </div>
  );
}

export default App;

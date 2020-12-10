import "./App.css";
import { Login } from "./components/login";
import { Links } from "./components/links";

function App() {
  return (
    <div className="App">
      <div id="wrapper-1">
        <Login />
        <Links />
      </div>
    </div>
  );
}

export default App;

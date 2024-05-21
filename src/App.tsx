import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/common";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <Router>
      <NavBar/>
      <AppRouter/>
    </Router>
  );
}

export default App;

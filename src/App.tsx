import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/common";
import { AppRouter } from "./router/AppRouter";
import './App.css';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Router>
      <header id="Nav">
        <NavBar />
      </header>
      <main>
        <AppRouter />
      </main>
    </Router>
  );
}

export default App;

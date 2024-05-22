import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/common";
import { AppRouter } from "./router/AppRouter";
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <AppRouter/>
    </Router>
  );
}

export default App;

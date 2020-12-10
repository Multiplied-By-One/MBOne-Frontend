import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutDID from "./pages/About";
import LoginPage from "./pages/Login";

import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Home />
        </Route>

        <Route exact path="/about">
          <AboutDID />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

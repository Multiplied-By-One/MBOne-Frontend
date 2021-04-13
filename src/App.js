import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/general/Home";
import AboutDID from "./pages/general/About";
import LoginPage from "./pages/general/Login";

import NavBar from "./components/NavBar"

import { MBODark } from './themes/theme';
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  let theme = MBODark;

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;

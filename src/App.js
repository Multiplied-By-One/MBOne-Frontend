import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/general/Home";
import AboutDID from "./pages/general/About";
import LoginPage from "./pages/general/Login";

import NavBar from "./components/NavBar";
import { MyProvider } from './pages/theEyePages/reducer/eyeReducer';
import TheEyeRouter from './pages/theEyePages/Router';

import { MBODark } from './themes/theme';
import { ThemeProvider } from '@material-ui/core/styles';


function App() {
  let theme = MBODark;

  // console.log("App state: ", state)
  return (
    <ThemeProvider theme={theme}>
      <MyProvider>
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

            <TheEyeRouter />

          </Switch>
        </div>
      </MyProvider>
    </ThemeProvider>
  );
}

export default App;

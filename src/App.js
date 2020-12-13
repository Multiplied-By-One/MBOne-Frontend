import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/general/Home";
import FAQ from "./pages/general/FAQ";
import LoginPage from "./pages/general/Login";
import Dashboard from "./pages/member/Dashboard"
import Blog from "./pages/general/Blog"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <NavBar />
          <Home />
        </Route>

        <Route exact path="/blog">
          <Blog />
        </Route>

        <Route exact path="/faq">
          <FAQ />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

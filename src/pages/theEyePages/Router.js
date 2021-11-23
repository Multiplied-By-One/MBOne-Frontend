
// This Router file is just to test the router setup for The Eye feature in storybook

import { Switch, Route, Link } from "react-router-dom";

import WelcomeMessage from './welcomeMessage/WelcomeMessage';
import AccountList from './accountList/AccountList';
import CreateEyeAcc from './createEyeAccount/CreateEyeAcc';

function Router(props) {

  return (
      <div>
      <Link to="/theEye/welcome"> WELCOME TO THE EYE </Link>
        <Switch>
          <Route exact path="/theEye/welcome" component={WelcomeMessage} />
          <Route exact path="/theEye/accounts" component={AccountList} />
          <Route exact path="/theEye/create" component={CreateEyeAcc} />
        </Switch>
      </div>
  );
}

export default Router;

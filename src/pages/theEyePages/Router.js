
// This Router file is just to test the router setup for The Eye feature in storybook

import { Switch, Route, Link } from "react-router-dom";

import WelcomeMessage from './welcomeMessage/WelcomeMessage';
import AccountList from './accountList/AccountList';
import ChangeSetting from './changeSetting /ChangeSetting';
import CreateEyeAcc from './createEyeAccount/CreateEyeAcc';
import EyeAccoutLogin from './eyeAccountLogin/EyeAccountLogin';
import CreateJournal from './space/createJournal/CreateJournal';
import EditJournal from './space/editJournal/EditJournal';
import SpaceProfile from './space/spaceProfile/SpaceProfile'

import { MBODark } from './../../themes/theme';
import { ThemeProvider } from '@material-ui/core/styles';

function Router(props) {
  let theme = MBODark;

  return (
    <ThemeProvider theme={theme}>
      <div>
      <Link to="/theEye/welcome">{props.text} </Link>
        <Switch>
          <Route exact path="/theEye/welcome" component={WelcomeMessage} />
          <Route exact path="/theEye/accounts" component={AccountList} />
          <Route exact path="/theEye/login" component={EyeAccoutLogin} />
          <Route exact path="/theEye/setting" component={ChangeSetting} />
          <Route exact path="/theEye/create" component={CreateEyeAcc} />
          {/* path="/theEye/space/profile" should change to path="/theEye/space/:accountName" */}
          <Route exact path="/theEye/space/profile" component={SpaceProfile} />
          <Route exact path="/theEye/space/create" component={CreateJournal} />
          <Route exact path="/theEye/space/edit" component={EditJournal} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default Router;

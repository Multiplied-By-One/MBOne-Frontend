import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

import WelcomeMessage from './welcomeMessage/WelcomeMessage';
import AccountList from './accountList/AccountList';
import ChangeSetting from './changeSetting/ChangeSetting';
import CreateEyeAcc from './createEyeAccount/CreateEyeAcc';
import EyeAccoutLogin from './eyeAccountLogin/EyeAccountLogin';
import CreateJournal from './space/createJournal/CreateJournal';
import EditJournal from './space/editJournal/EditJournal';
import SpaceProfile from './space/spaceProfile/SpaceProfile'
import SendMessage from "./eyeBox/sendMessage/SendMessage";
import ReceivedMessage from "./eyeBox/receivedMessage/ReceiveMessage"

function Router(props) {
  return (<>
    <Link to="/theEye/welcome"> {props.text} </Link>
    <Switch>
        <Route exact path="/theEye/welcome" component={WelcomeMessage} />
        <Route exact path="/theEye/accounts" component={AccountList} />
        <Route exact path="/theEye/login" component={EyeAccoutLogin} />
        <Route exact path="/theEye/setting" component={ChangeSetting} />
        <Route exact path="/theEye/create" component={CreateEyeAcc} />
        <Route exact path="/theEye/space/profile" component={SpaceProfile} />
        <Route exact path="/theEye/space/create" component={CreateJournal} />
        <Route exact path="/theEye/space/edit" component={EditJournal} />
        <Route exact path="/theEye/eyebox/send" component={SendMessage} />
        <Route exact path="/theEye/eyebox/received" component={ReceivedMessage} />
    </Switch>
  </>
      
  );
}

export default Router;

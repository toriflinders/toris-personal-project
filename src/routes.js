import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Profile from './Components/Profile/Profile';
import Announcements from './Components/Announcements/Announcements';
import Art from './Components/Art/Art';
import Checkout from './Components/Checkout/Checkout';
import Email from './Components/Email/Email';

export default (
  <Switch>
    <Route exact path='/' component={Profile} />
    <Route path='/login' component={Auth} />
    <Route path='/announcements' component={Announcements} />
    <Route path='/art' component={Art} />
    <Route path='/checkout/:art_id' component={Checkout} />
    <Route path='/email' component={Email} />
  </Switch>
)

// have not added component or route for checkout page/component

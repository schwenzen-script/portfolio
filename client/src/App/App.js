import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import {
  GivenRoute,
} from './utils';

import {
  Default,
} from './layouts';

import { 
  Home, 
  Work,
  Contact,
  NotFound,
} from './pages';

import * as Routes from './routes';

import './_sass/index.scss';

function App() {
  return (
    <Router>
      <Switch>
        <GivenRoute exact path={Routes.HOME_ROUTE} layout={Default} component={Home} />
        <GivenRoute exact path={Routes.WORK_ROUTE} layout={Default} component={Work} />
        <GivenRoute exact path={Routes.CONTACT_ROUTE} layout={Default} component={Contact} />
        <GivenRoute path="*" layout={Default} component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

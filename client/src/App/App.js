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
  Home ,
} from './pages';

import * as Routes from './routes';

import './_sass/index.scss';

function App() {
  return (
    <Router>
      <Switch>
        <GivenRoute exact path={Routes.HOME_ROUTE} layout={Default} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

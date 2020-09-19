import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../layout';
import App from '../app';
import CreateLink from '../links/CreateLink';

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route path='/create-link'>
            <CreateLink />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import PeoplesList from './components/containers/PeoplesList';
import PageNotFound from './components/views/PageNotFound';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={PeoplesList} />
        <Route component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
};

export default App;

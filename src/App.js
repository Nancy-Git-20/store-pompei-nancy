import React from 'react';
import { Switch, Route } from "react-router-dom";
import AppProvider from './context/storeRewardsContext';
import {urlDeploy} from './data/config';
import Home from './Home';
import History from './History';
import PageNotFound from './PageNotFound';
import './App.css';


function App() {
  
  return (
    <AppProvider>
    <div id="AppStore">
     
      <Switch>
        <Route exact path={urlDeploy} component={Home} />
        <Route exact path={urlDeploy+"history"} component={History} />
        <Route component={PageNotFound} />
      </Switch>
     
    </div>
    </AppProvider>
  );
}

export default App;

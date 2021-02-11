import React from 'react';
import { Switch, Route } from "react-router-dom";
import AppProvider from './context/storeRewardsContext';
import Home from './Home';
import History from './History';
import './App.css';


function App() {
  
  return (
    <AppProvider>
    <div id="AppStore">
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
      </Switch>
     
      
    </div>
    </AppProvider>
  );
}

export default App;

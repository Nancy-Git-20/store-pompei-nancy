import React from 'react';
import AppProvider from './context/storeRewardsContext';
import Header from './components/Header';
import Banner from './components/Banner';

import Products from './components/Products';

import './App.css';


function App() {
  return (
    <AppProvider>
    <div id="AppStore">
      
      <Header/>

      <Banner bannerAlt="electronics"/>

      <div className="UserActions">
        {/* <Pagination/>
        <Filters/> */}
      </div>

      <Products />
      
    </div>
    </AppProvider>
  );
}

export default App;

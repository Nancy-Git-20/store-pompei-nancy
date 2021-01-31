import React from 'react';
import AppProvider from './context/storeRewardsContext';
import Header from './components/Header';
import Banner from './components/Banner';
import Filters from './components/Filters';
import Products from './components/Products';
import PaginationMat from './components/PaginationMat';
import './App.css';


function App() {
  
  return (
    <AppProvider>
    <div id="AppStore">
      
      <Header/>

      <Banner bannerAlt="electronics"/>

      <Filters/>
      
      <PaginationMat />
      <Products />
      <PaginationMat />
      
    </div>
    </AppProvider>
  );
}

export default App;

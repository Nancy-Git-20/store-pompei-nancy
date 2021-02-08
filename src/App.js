import React, {useRef} from 'react';
import AppProvider from './context/storeRewardsContext';
import Header from './components/Header';
import Banner from './components/Banner';
import Filters from './components/Filters';
import Products from './components/Products';
import PaginationMat from './components/PaginationMat';
import Sidebar from './components/Sidebar';
import './App.css';


function App() {
  
  return (
    <AppProvider>
    <div id="AppStore">
      {/* <Sidebar/> */}
      
      <Sidebar width={30} height={"100vh"}/>
        

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

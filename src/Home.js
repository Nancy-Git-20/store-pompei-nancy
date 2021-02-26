import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Filters from './components/Filters';
import Products from './components/Products';
import PaginationMat from './components/PaginationMat';
import Sidebar from './components/Sidebar';

function Home() {
  
  return (
   
    <div id="AppStore">
     
      <Sidebar width={30} height={"100vh"}/>
       
      <Header/>

      <Banner bannerAlt="electronics"/>

      <Filters/>
      
      <Products />
      {/* <PaginationMat />
      
      <PaginationMat /> */}

    </div>

  );
}

export default Home;

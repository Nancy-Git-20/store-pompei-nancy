import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { AppContext } from "./context/storeRewardsContext";
import Header from './components/Header';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import ProductRedeem from "./components/ProductRedeem";

function History() {

  const { toggleMenuUser, history, historyFetched } = useContext(AppContext);
  let ListRedeem;
  if( history.length === 0 ){
    ListRedeem = <h6>Todavía no ha canjeado <br/> ningún producto.</h6>;
  }else{
    
    ListRedeem = history.map(product => (
      <ProductRedeem
        key={product._id}
        idOp={product._id}
        idProd={product.productId}
        category={product.category}
        cost={product.cost}
        createDate={product.createDate}
        name={product.name}
        img={product.img.hdUrl}
      />
  ));
  }
  
  return (
     
     <div id="History">
      
        <Sidebar width={30} height={"100vh"}/>
        
        <Header/>

        <Banner bannerAlt="electronics" bannerSection="history" />

        <div className="HistRedeem">
          <div className="container">
            {historyFetched
                ? ( 
                    <>
                      <h3>Productos canjeados:</h3>
                      <div className="ProdGrid">{ListRedeem} </div>

                      <Link to="/">
                        <button className="btnAll w40" > Volver </button>
                      </Link>
                    </>
                  )  
                : <em>cargando historial...</em>  
            }
          </div>  
        </div>


             
      </div>
    
  );
}

export default History;

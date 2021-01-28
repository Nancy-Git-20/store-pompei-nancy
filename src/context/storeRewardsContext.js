import React, {useState, useEffect } from "react";
import * as config from "../data/config";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const[userFetched, setUserFetched] = useState(false);
    const[products, setProducts] = useState([]);
    const[productsFetched, setProductsFetched] = useState(false);
    const[initPoints, setInitPoints] = useState('')


    useEffect(() => {
        getUser();
        getProducts();   
    }, []);

    const getUser = () => {
        config.getUser().then((response) => {
            //console.log('user ', response.data.points)
            setUser(response.data);
            setUserFetched(true);
            setInitPoints(response.data.points)
        });
      };
    
    const getProducts = () => {
        config.getProducts().then((response) => {
          //console.log('response Prods', response.data);
          setProducts(response.data);
          setProductsFetched(true);
          
      });
    }

  return (
    <AppContext.Provider value={{ user, setUser, userFetched, setUserFetched, products, setProducts, productsFetched, setProductsFetched, initPoints, setInitPoints }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;

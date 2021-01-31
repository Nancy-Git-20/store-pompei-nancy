import React, {useState, useEffect } from "react";
import * as config from "../data/config";
import usePagination from "../components/Pagination";
import Product from "../components/Product";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const[user, setUser] = useState([]);
    const[userFetched, setUserFetched] = useState(false);
    const[products, setProducts] = useState([]);
    const[productsFetched, setProductsFetched] = useState(false);
    const[filterProducts, setFilterProducts] = useState([]);
    const[filterTerm, setFilterTerm] = useState('Todas');
    const[initPoints, setInitPoints] = useState('');
    const[comboCategory, setComboCategory] = useState([]);

    /* Start Pagination config */
    const prodctsCount = products.length;
    let [page, setPage] = useState(1);
    const PER_PAGE = 16;

    const count = Math.ceil(prodctsCount / PER_PAGE);
    const _DATA = usePagination(products, PER_PAGE);
    //console.log('prodctsCount ', prodctsCount )

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    const productsList = _DATA.currentData().map(product => (
      <Product
        key={product._id}
        id={product._id}
        name={product.name}
        cost={product.cost}
        category={product.category}
        img={product.img.hdUrl}
      />
  ));
    /* end  Pagination config*/

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
    
    const getProducts = (Term) => {
        config.getProducts().then((response) => {
          //console.log('response Prods', response.data);
          const products = response.data;
          if (Term) {
            const filterProd = products.filter((prod) => prod.category === Term);
            setProducts(filterProd);
          } else {
            setProducts(products);
          }
          //setProducts(response.data);
          const cate_names = response.data.map((p) => p.category );
          const comboCategory = [...new Set(cate_names)];
          //console.log('comboCategory ', comboCategory);
          setComboCategory(comboCategory.sort());
          setProductsFetched(true);
      });
    }

    const FilterProducts = (Term) => {
      //alert(Term);
      const newfilterProducts = products.filter((prod) => prod.category === Term);
      //console.log(newfilterProducts);
      setFilterProducts(newfilterProducts);
      console.log('newfilterProducts ', newfilterProducts);
      // if(filterTerm === "Todas"){
      //   setProducts(response.data);
      //   const cate_names = response.data.map((p) => p.category );
      //   const comboCategory = [...new Set(cate_names)];
      //   //console.log('comboCategory ', comboCategory);
      //   setComboCategory(comboCategory.sort());
      // }else{
      //   const newfilterProducts = products.filter((prod) => prod.category === Term);
      //   //console.log(newfilterProducts);
      //   setProducts(newfilterProducts);
      // }
      // setProductsFetched(true);
    }


  return (
    <AppContext.Provider value={{ user, setUser, userFetched, setUserFetched, products, setProducts, getProducts, productsFetched, setProductsFetched,
      FilterProducts, filterProducts, filterTerm, setFilterTerm, setFilterProducts, prodctsCount, count, page, handleChange, productsList, initPoints, setInitPoints, 
      comboCategory, setComboCategory }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;

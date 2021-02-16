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
    const[filterPrice, setFilterPrice] = useState(true);
    const[filterAlpha, setFilterAlpha] = useState(false);
    const[initPoints, setInitPoints] = useState('');
    const[comboCategory, setComboCategory] = useState([]);
    const[xPosition, setX] = useState(100);
    const[history, setHistory ] = useState([]);
    const[historyFetched, setHistoryFetched] = useState(false);
    const[filterHistory, setFilterHistory] = useState(true);
    
    const[redeemProduct, setRedeemProduct] = useState(config.demoProd);
    const[postResponse, setPostResponse] = useState('');

    /* Start Pagination config */
    const prodctsCount = filterProducts.length;
    let [page, setPage] = useState(1);
    const PER_PAGE = 16;

    const count = Math.ceil(prodctsCount / PER_PAGE);
    const _DATA = usePagination(filterProducts, PER_PAGE);
    //console.log('prodctsCount ', prodctsCount )

    const handlePageChange = (e, p) => {
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
        getHistory();   
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
          // const products = response.data;
          // if (Term && Term !== "Todas") {
          //   const filterProd = products.filter((prod) => prod.category === Term);
          //   setProducts(filterProd);
          // } else {
          //   setProducts(products);
          // }
          setProducts(response.data);
          filterTerm === "Todas" ? setFilterProducts(response.data) : setFilterProducts([]);
          const cate_names = response.data.map((p) => p.category );
          const comboCategory = [...new Set(cate_names)];
          //console.log('comboCategory ', comboCategory);
          setComboCategory(comboCategory.sort());
          setProductsFetched(true);
      });
    }

    const getHistory = () => {
      config.getHistory().then((response) => {
          console.log('getHistory ', response.data);
          const histDesc = response.data.reverse();
          setHistory(histDesc);
          //setHistory(response.data);
          setHistoryFetched(true);
      });
    };

    const sendPostProduct = (productId) => {
      config.sendRedeemProd(productId)
        .then((response) => {
          console.log('response', response.data.message);
          //setPostResponse(response.message);
          setPostResponse('Ha canjeado sus puntos con éxito.');
          getUser();
          getHistory();
        })
        .catch((error) => {
          console.log('error', error);
          setPostResponse('Se ha producido un error.');
        });
    };

    const FilterProdcts = (Term) => {
      //alert(Term);
      if(Term === "Todas"){
        setFilterProducts(products); setFilterTerm("Todas");
        setPage(1);
        _DATA.jump(1);
      }else{
        const newfilterProducts = products.filter((prod) => prod.category === Term);
        setPage(1);
        _DATA.jump(1);
        //console.log(newfilterProducts);
        setFilterProducts(newfilterProducts); setFilterTerm(Term);
      }
     
      //console.log('newfilterProducts ', newfilterProducts);

      // const {hotels, filterh } = this.state;
      // let ProductsFiltro = [];
      // ProductsFiltro = products.filter((prod) => prod.category === Term).filter(this.FiltroPrecio);
      // hotelesFiltro = hotelesFiltro.filter(this.FiltroTamanio);
      // hotelesFiltro = hotelesFiltro.filter(this.FiltroFechas);
      // this.setState({ filterh: hotelesFiltro });

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
   
    const OrderProdcts = (ValueChecked) => {
      //console.log('activo? ', ValueChecked);
      let isActive = ValueChecked; //->order Ascendente - menor a may
      let orderProds = [];
      setFilterPrice(ValueChecked);
      if(isActive){
        // -> ordenar < a >
        orderProds = filterProducts.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
      }else{
        orderProds = filterProducts.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
      }
      setFilterProducts(orderProds);
    }

    const OrderAlpha = (ValueAlpha) => {
      //console.log('activo? ', ValueAlpha);
      let isActive = ValueAlpha; //->order AZ
      let orderProds = [];
      setFilterAlpha(ValueAlpha);
      
      if(isActive){
        orderProds = filterProducts.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
      }else{
        orderProds = filterProducts.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)).reverse();
      }
      setFilterProducts(orderProds);
    }

    const toggleMenuUser = () => {
        if (xPosition === 100) {
        setX(69);
        } else {
        setX(100);
        }
    };

    const OrderHistory = (ValueChecked) => {
      console.log('ordenar Hist?', ValueChecked);
      let isActive = ValueChecked;
      let orderHist = [];
      setFilterHistory(ValueChecked);
      if(isActive){
        orderHist = history.reverse();
      }else{
        orderHist = history.reverse();
      }

    }



  return (
    <AppContext.Provider value={{ user, setUser, userFetched, setUserFetched, products, setProducts, getProducts, productsFetched, setProductsFetched,
      FilterProdcts, filterProducts, filterTerm, setFilterTerm, setFilterProducts, prodctsCount, count, page, PER_PAGE, handlePageChange, productsList,
      OrderProdcts, filterPrice, setFilterPrice, initPoints, setInitPoints, filterAlpha, OrderAlpha, comboCategory, setComboCategory,
      xPosition, toggleMenuUser, history, setHistory, historyFetched, filterHistory, setFilterHistory, OrderHistory, redeemProduct, setRedeemProduct, sendPostProduct, postResponse, setPostResponse
      }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;

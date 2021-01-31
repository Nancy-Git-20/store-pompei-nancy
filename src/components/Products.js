import React, {useContext} from 'react';
import { AppContext } from "../context/storeRewardsContext";
// import Product from './Product';
// import { Pagination } from "@material-ui/lab";
// import usePagination from "./Pagination";

function Products() {
    const { productsFetched, filterProducts, filterTerm, productsList } = useContext(AppContext);

    //const prodctsCount = products.length;
    //console.log('pppp ', products);

    // let [page, setPage] = useState(1);
    // const PER_PAGE = 16;

    // const count = Math.ceil(prodctsCount / PER_PAGE);
    // const _DATA = usePagination(products, PER_PAGE);

    // const handleChange = (e, p) => {
    //     setPage(p);
    //     _DATA.jump(p);
    // };

    // const productsList = _DATA.currentData().map(product => (
    //     <Product
    //       key={product._id}
    //       id={product._id}
    //       name={product.name}
    //       cost={product.cost}
    //       category={product.category}
    //       img={product.img.hdUrl}
    //     />
    // ));

    
    
  return (

    <section className="SectProds">
        <div className="container">
           
            <div className="FullWidth">
                {/* <Pagination
                    count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                /> */}
                <div className="Products">
                    {
                        productsFetched && filterTerm === 'Todas'  
                        ? productsList
                        :  <em>cargando productos...</em>
                    }    
                </div>

            </div>       

        </div>
    </section>

  );
}

export default Products;

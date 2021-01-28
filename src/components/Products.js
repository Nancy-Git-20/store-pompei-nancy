import React, {useContext} from 'react';
import { AppContext } from "../context/storeRewardsContext";
import Product from './Product';

function Products() {
    const { products, productsFetched } = useContext(AppContext);

    const prodctsCount = products.length;
    console.log('pppp ', products)

    const productsList = products.map(product => (
        <Product
          key={product._id}
          id={product._id}
          name={product.name}
          cost={product.cost}
          category={product.category}
          img={product.img.hdUrl}
        />
    ));
    
  return (

    <section className="SectProds">
        <div className="container">
           
            <div className="FullWidth">
                <div className="Products">
                    {
                        productsFetched 
                        ? productsList
                        :  <em>cargando productos...</em>
                    }    
                </div>


                {/* <h2 className="UserName">Hola {userFetched
                ? ( <strong>
                        {user.name} {" "}
                        <span className="Points">{user.points} <img src={coin} alt="Puntos"/></span>
                    </strong>
                    ) 
                : <em>cargando usuario...</em>} </h2> */}

            </div>       

        </div>
    </section>

  );
}

export default Products;

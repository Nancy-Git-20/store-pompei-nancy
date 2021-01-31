import React, {useContext} from 'react';
import { AppContext } from "../context/storeRewardsContext";


function Filters() {
    const { productsFetched, comboCategory, FilterProducts, filterTerm, setFilterTerm, getProducts } = useContext(AppContext);
    
//<select onChange={(e) => getProductStore(e.target.value)}>
  return (

    <div className="UserActions">

        <div className="container">
            {productsFetched 
             ?
                (
                    <>
                        <label>Categorías: </label>
                        <select onChange={(e) => getProducts(e.target.value)}>
                            <option value="Todas"> Todas </option>
                            {comboCategory.map((element, i) => (
                                <option key={i} value={element}>{element}</option>
                            ))}
                        </select>
                    </>
                )
             :  <em>cargando categorias...</em>    
            }    
        </div>
    </div>

  );
}

export default Filters;

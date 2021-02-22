import React, {useContext} from 'react';
import { AppContext } from "../context/storeRewardsContext";

import { Pagination } from "@material-ui/lab";

function PaginationMat() {
    const { prodctsCount, count, page, PER_PAGE, handlePageChange } = useContext(AppContext);
    let Txt;

    if(prodctsCount < PER_PAGE && page === 1){
        Txt = prodctsCount + ' of ' + prodctsCount + 'products'
    }else if(prodctsCount >= PER_PAGE && page === 1){
        Txt = PER_PAGE + ' of ' + prodctsCount + 'products'
    }else if(prodctsCount >= PER_PAGE && page === 2){
        Txt = prodctsCount + ' of ' + prodctsCount + 'products'
    }

  return (
    <div className="Paginate">
        <div className="container">
            <div className="FullWidth PagInfo">
                {/* <p>{page === 1 ? 16 : 32 } of {prodctsCount} products </p> */}
                {/* <p>{prodctsCount <= PER_PAGE ? prodctsCount : PER_PAGE } of {prodctsCount} products </p> */}
                <p>{Txt}</p>
                
                <Pagination
                    count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handlePageChange}
                />
                {/* <p>{count} {' - '} {page} </p> */}
            </div>
        </div>        
    </div>
  );
}

export default PaginationMat;

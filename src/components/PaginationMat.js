import React, {useContext} from 'react';
import { AppContext } from "../context/storeRewardsContext";

import { Pagination } from "@material-ui/lab";

function PaginationMat() {
    const { count, page, prodctsCount, handleChange } = useContext(AppContext);
    
  return (
    <div className="Paginate">
        <div class="container">
            <div class="FullWidth PagInfo">
                <p>{page === 1 ? 16 : 32 } of {prodctsCount} products </p>
                <Pagination
                    count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                />
                {/* <p>{count} {' - '} {page} </p> */}
            </div>
        </div>        
    </div>
  );
}

export default PaginationMat;

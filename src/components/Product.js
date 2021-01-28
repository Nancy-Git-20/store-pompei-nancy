import React, {useContext} from 'react';
import { AppContext } from "../context/storeRewardsContext";
import coin from '../assets/icons/coin.svg';


function Product(props) {
    const { initPoints } = useContext(AppContext);
    //console.log('initPoints ', initPoints, ' aa')
    //console.log('props ::: ', props);
    const {id, name, cost, category, img} = props;

  return (
    
    <div id={id} className="Product">
        <figure>
            <img src={img} alt={name}/>
        </figure>
        <div className="Info">
            <p>{category}</p>
            <h4>{name}</h4>
        </div>
        <div className="Icons">
            {
                initPoints >= cost
                ? <span className="Icon Cart"></span>
                : <span className="Icon PointsLess"> <strong>You need 0000</strong> <img src={coin} alt="Points"/> </span>
            }
            
            
        </div>
        <div className="Hover">
            <div className="vertical-center">
                <h5>{cost} <img src={coin} alt="Points"/></h5>
                <button>Redeem now</button>
            </div>
        </div>
    </div>
    
  );
}

export default Product;

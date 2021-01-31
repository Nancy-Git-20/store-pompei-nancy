import React, {useContext} from 'react';
import { AppContext } from "../context/storeRewardsContext";
import coin from '../assets/icons/coin.svg';
import localSwitch from '../assets/Switch-x2.png';


function Product(props) {
    const { initPoints } = useContext(AppContext);
    //console.log('initPoints ', initPoints, ' aa')
    //console.log('props ::: ', props);
    let {id, name, cost, category, img} = props;
    let needPoints = '';

    if(initPoints < cost){
        needPoints = cost - initPoints
    }
    //Esta imagen viene con una sombra y queda mal 
    if( img === "https://coding-challenge-api.aerolab.co/images/Switch-x2.png"){
        img = localSwitch;
    }
    
  return (
    
    <div id={id} className="Product">
        <figure>
            <img src={img} alt={name}/>
        </figure>
        <div className="Info">
            <p>{category}</p>
            <h4>{name}: {cost}</h4>
        </div>
        <div className="Icons">
            {
                initPoints >= cost
                ? <span className="Icon Cart"></span>
            : <span className="Icon PointsLess"> <strong>You need {needPoints}</strong> <img src={coin} alt="Points"/> </span>
            }
        </div>

        {
            initPoints >= cost
            ? (
                <div className="Hover">
                    <div className="vertical-center">
                        <h5>{cost} <img src={coin} alt="Points"/></h5>
                        <button>Redeem now</button>
                    </div>
                </div>
            )
            : (
                <div className="Hover">
                    <div className="vertical-center">
                        <button>Buy points</button>
                    </div>
                </div>
            )
        }


        {/* <div className="Hover">
            <div className="vertical-center">
                <h5>{cost} <img src={coin} alt="Points"/></h5>
                <button>Redeem now</button>
            </div>
        </div> */}
    </div>
    
  );
}

export default Product;

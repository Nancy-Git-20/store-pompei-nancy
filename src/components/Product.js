import React, {useContext, useRef } from 'react';
import { AppContext } from "../context/storeRewardsContext";
import coin from '../assets/icons/coin.svg';
import localSwitch from '../assets/Switch-x2.png';
import Modal from './Modal';


function Product(props) {
    const { initPoints, redeemProduct, setRedeemProduct, sendPostProduct, postResponse, setPostResponse } = useContext(AppContext);
    //console.log('initPoints ', initPoints, ' aa')
    //console.log('props ::: ', props);
    let {id, name, cost, category, img} = props;
    let needPoints = '';


    const modalRedeem = useRef(null);
    const modalBuy = useRef(null);

    if(initPoints < cost){
        needPoints = cost - initPoints
    }
    //Esta imagen viene con una sombra y queda mal 
    if( img === "https://coding-challenge-api.aerolab.co/images/Switch-x2.png"){
        img = localSwitch;
    }

    const redeemProdFn = (id,name,cost) => {
        //console.log('id,name,cost ', id, ' ', name, ' ', cost);
        const prod = {
            "id": id,
            "name": name,
            "cost": cost
        };
        setRedeemProduct(prod);
        //console.log(prod);
        modalRedeem.current.open();
    }

    const nuevoSaldo = initPoints - redeemProduct.cost;

    const redeemResetMsgFn = () => {
        setPostResponse('');
        modalRedeem.current.close();
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
                        <button onClick={ () => redeemProdFn(id,name,cost) }>Redeem now</button>
                        {/* <button onClick={ () => modalRedeem.current.open() }>Redeem now</button> */}
                    </div>
                </div>
            )
            : (
                <div className="Hover">
                    <div className="vertical-center">
                    <button onClick={ ()=> modalBuy.current.open() }>Buy points</button>
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

        {
            redeemProduct !== null
            ? (<Modal ref={modalRedeem}>
                <h5>Redeem now</h5>
                <div class="ModalInfo">
                    
                    {postResponse === ''
                    ? (
                        <div>
                            <h6>¿Está seguro de canjear el producto <strong>{redeemProduct.name}</strong>?</h6>
                            <p>Se descontarán <strong>{redeemProduct.cost}</strong> puntos de su cuenta.</p>
                            <p>Su nuevo saldo será de <strong>{nuevoSaldo}</strong> puntos. </p>

                            <div className="Actions">
                                <button className="Btn Cancel" onClick={ () => modalRedeem.current.close() }>Cancel</button>

                                <button className="Btn Ok" onClick={ () => sendPostProduct(redeemProduct.id) }>OK</button>
                            </div> 
                        </div>
                    ) : (
                    <div className="Resp">
                        <p> {postResponse} </p>
                        <p>Su nuevo saldo es de <strong>{nuevoSaldo}</strong> puntos. </p>
                        <button className="Btn Cancel" onClick={ () => redeemResetMsgFn() }>Cerrar</button>
                    </div>
                    )}
                </div>
            </Modal>)
            : ''
        }

        {/* <Modal ref={modalRedeem}>
            <h5>Redeem now</h5>
            <div class="ModalInfo">
                <h6>¿Está seguro de canjear este producto?</h6>
                <p>Se descontarán {redeemProduct.cost} puntos de su cuenta</p>
            </div>
        </Modal> */}
        <Modal ref={modalBuy}>
            pippipip
        </Modal>
    </div>
    
  );
}

export default Product;

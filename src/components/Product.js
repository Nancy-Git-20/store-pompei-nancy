import React, {useState, useContext, useRef } from 'react';
import { AppContext } from "../context/storeRewardsContext";
import coin from '../assets/icons/coin.svg';
import localSwitch from '../assets/Switch-x2.png';
import Modal from './Modal';
import ModalBuy from './ModalBuy';
import LineSlider from './LineSlider';
import Radios from './Radios';
import usePrevious from './use-previous';



function Product(props){
    const { initPoints, redeemProduct, setRedeemProduct, sendPostProduct, postResponse, setPostResponse, sendPostPoints, pointsResponse,
         setPointsResponse, puntosCuentas, setPuntosCuentas } = useContext(AppContext);
    
    const [pointsAdd, setPointsAdd] = useState('1000');
    const [warningPoints, setWarningPoints] = useState('');
    const [saldoPoints, setSaldoPoints] = useState(initPoints);
    // const [saldoRedeem, setSaldoRedeem] = useState(initPoints);
    //console.log('saldoRedeem ', saldoRedeem);

    const prevPoints = usePrevious(saldoPoints);
    //console.log('prevPoints ', prevPoints);
    // const prevSaldoRedeem = usePrevious(saldoRedeem);
    // console.log('prevSaldoRedeem ', prevSaldoRedeem);

    //console.log('initPoints ', initPoints, ' aa')
    //console.log('puntosCuentas ', puntosCuentas);
    //console.log('props ::: ', props);
    let {id, name, cost, category, img} = props;
    let needPoints = '';
    //let warningPoints = '';


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
        console.log('modalRedeem ', modalRedeem);
        modalRedeem.current.open();
    }
    // const openModalBuy = () => {
    //     console.log('modalBuy ', modalBuy);
    //     modalBuy.current.open();
    // }

    const nuevoSaldo = initPoints - redeemProduct.cost;
    // const nuevoSaldoRedeemOk = prevSaldoRedeem - redeemProduct.cost;
    const nuevoSaldoRedeemOk = puntosCuentas - redeemProduct.cost;
    
    //PuntosCuentas - redeemProduct.cost;

    // const nuevoSaldoPoints = initPoints + parseInt(pointsAdd);
    // const nuevoSaldoPointsOk = puntosCuentas + parseInt(pointsAdd);

    const redeemResetMsgFn = () => {
        setPostResponse('');
        setPuntosCuentas(null);
        modalRedeem.current.close();
    }
    const modalBuyClose = (e) => {
        console.log('. ', modalBuy);
        modalBuy.current.close();
    }
    // const pointsResetMsgFn = () => {
    //     setPointsResponse('');
    //     setPuntosCuentas(null);
    //     modalBuy.current.close();
    // }

    // const handlePoints = (e, newValue) => {
    //     const NewPuntos = newValue;
    //     setPointsAdd(NewPuntos);
    //     if( pointsAdd === 1000 || pointsAdd === 5000 || pointsAdd === 7500 ){    
    //         setWarningPoints('');
    //     }else{
    //         setWarningPoints('Debe seleccionar uno de los valores indicados.');
    //     }
    // }
    //.toFixed(0)parseInt(

    // const handlePoints = (e) => {
    //     const NewPuntos = e.target.value;
    //     console.log(typeof NewPuntos, ' ', NewPuntos);
    //     setPointsAdd(NewPuntos);
    //     if( pointsAdd === '1000' || pointsAdd === '5000' || pointsAdd === '7500' ){    
    //         setWarningPoints('');
    //     }else{
    //         setWarningPoints('Debe seleccionar uno de los valores indicados.');
    //     }
    // }


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
                    {/* <button onClick={ ()=> openModalBuy() }>Buy points</button> */}
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
                <div className="ModalInfo">
                    
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
                        <p> Su nuevo saldo es de <strong>{nuevoSaldoRedeemOk}</strong> puntos. </p>
                        <button className="Btn Cancel" onClick={ () => redeemResetMsgFn() }>Cerrar</button>
                    </div>
                    )}
                </div>
            </Modal>)
            : ''
        }

<Modal ref={modalBuy} >
    <ModalBuy modalBuyClose={modalBuyClose} />
</Modal>

        {/* <Modal ref={modalRedeem}>
            <h5>Redeem now</h5>
            <div class="ModalInfo">
                <h6>¿Está seguro de canjear este producto?</h6>
                <p>Se descontarán {redeemProduct.cost} puntos de su cuenta</p>
            </div>
        </Modal> */}
        
        {/* <Modal ref={modalBuy}>
        <h5>Buy points</h5>
                <div className="ModalInfo">
                    
                    {pointsResponse === ''
                    ? (
                        <div>
                            <h6>¿Necesita adquirir más puntos?</h6>
                            <em>El sistema permite sumar 1000, 5000 ó 7500 puntos.</em>
                            <p>Seleccione la cantidad de puntos a incrementar.</p>
                            
                             <LineSlider handlePoints={handlePoints} /> 

                            <Radios pointsAdd={pointsAdd} handlePoints={handlePoints} />
                            
                            {warningPoints !== ''
                                ? (
                                     <p>{warningPoints}</p>
                                   )   
                                : (
                                    <p>Se sumarán <strong>{pointsAdd}</strong> puntos a su cuenta. <br/>
                                    Su nuevo saldo será de <strong>{nuevoSaldoPoints}</strong> puntos. </p>
                                )
                            }
                            <div className="Actions">
                                <button className="Btn Cancel" onClick={ () => modalBuy.current.close() }>Cancel</button>

                                <button className="Btn Ok" onClick={ () => sendPostPoints( parseInt(pointsAdd)) }>OK</button>
                            </div> 
                        </div>
                    ) : (
                    <div className="Resp">
                        <p> {pointsResponse} </p>
                        <p>Su nuevo saldo es de <strong>{nuevoSaldoPointsOk}</strong> puntos. </p>
                        <button className="Btn Cancel" onClick={ () => pointsResetMsgFn() }>Cerrar</button>
                    </div>
                    )}
                </div>
        </Modal> */}

          

    </div>
    
  );
}

export default Product;

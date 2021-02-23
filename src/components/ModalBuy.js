import React, {useState, useContext, useRef } from 'react';
import { AppContext } from "../context/storeRewardsContext";
//import LineSlider from './LineSlider';
import Radios from './Radios';


function ModalBuy({modalBuyClose}){

    const { initPoints, sendPostPoints, pointsResponse,
        setPointsResponse, puntosCuentas, setPuntosCuentas } = useContext(AppContext);
  
      
      const [pointsAdd, setPointsAdd] = useState('1000');
      const [warningPoints, setWarningPoints] = useState('');
      
      const modalBuy = useRef(null);

      const nuevoSaldoPoints = initPoints + parseInt(pointsAdd);
      const nuevoSaldoPointsOk = puntosCuentas + parseInt(pointsAdd);
  
      
      const pointsResetMsgFn = () => {
          setPointsResponse('');
          setPuntosCuentas(null);
          //modalBuy.current.close();
          //TypeError: Cannot read property 'close' of null
          modalBuyClose();
      }
  
      const handlePoints = (e) => {
          const NewPuntos = e.target.value;
          console.log(typeof NewPuntos, ' ', NewPuntos);
          setPointsAdd(NewPuntos);
          if( pointsAdd === '1000' || pointsAdd === '5000' || pointsAdd === '7500' ){    
              setWarningPoints('');
          }else{
              setWarningPoints('Debe seleccionar uno de los valores indicados.');
          }
      }
 
    return(

        <>
       
            <h5>Buy points</h5>
            <div className="ModalInfo">
                
                {pointsResponse === ''
                ? (
                    <div>
                        <h6>¿Necesita adquirir más puntos?</h6>
                        <em>El sistema permite sumar 1000, 5000 ó 7500 puntos.</em>
                        <p>Seleccione la cantidad de puntos a incrementar.</p>
                        
                        {/* <LineSlider handlePoints={handlePoints} /> */}

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
                            {/* <button className="Btn Cancel" onClick={ () => modalBuy.current.close() }>Cancel</button> */}
                            <button className="Btn Cancel" onClick={modalBuyClose}>Cancel</button>
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
        
        </>            

    );
}
export default ModalBuy;
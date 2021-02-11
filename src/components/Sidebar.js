import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { AppContext } from "../context/storeRewardsContext";
import ProductRedeem from "./ProductRedeem";
import worker from '../assets/worker.png';
import coin from '../assets/icons/coin.svg';

function Sidebar({width, height, children}) {
    const { user, userFetched, xPosition, toggleMenuUser, history, historyFetched } = useContext(AppContext);
    //console.log(history.length);
    let ListRedeem;
    if( history.length === 0 ){
      ListRedeem = <h6>Todavía no ha canjeado <br/> ningún producto.</h6>;
    }else{
      //books.slice(0,2).map
      ListRedeem = history.slice(3).map(product => (
        <ProductRedeem
          key={product._id}
          idOp={product._id}
          idProd={product.productId}
          category={product.category}
          cost={product.cost}
          createDate={product.createDate}
          name={product.name}
          img={product.img.hdUrl}
        />
    ));
    }
    

    //const [xPosition, setX] = React.useState(99);

    // const toggleMenuUser = () => {
    //     if (xPosition === 99) {
    //     setX(70);
    //     } else {
    //     setX(99);
    //     }
    // };

    // React.useEffect(() => {
    //     setX(0);
    // }, []);

  return (

    <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}vw)`,
          width: `${width}vw`,
          minHeight: height
        }}
      >
        <button
          onClick={() => toggleMenuUser() }
          className="toggle-menu"
          style={{
            transform: `translate(${-10}px, 20vh)`
          }}
        ></button>

        <div className="content">
            {/* <button onClick={() => toggleMenuUser() }>CLOSE X</button> */}
            <div className="CloseBtn" onClick={() => toggleMenuUser() }>
              <svg id="Layer_1" x="0px" y="0px" viewBox="0 0 286.054 286.054" width="40" height="40">
                <g>
                  <path style={{fill:'#6ee8ff'}} d="M168.352,142.924l25.28-25.28c3.495-3.504,3.495-9.154,0-12.64l-12.64-12.649
                    c-3.495-3.486-9.145-3.495-12.64,0l-25.289,25.289l-25.271-25.271c-3.504-3.504-9.163-3.504-12.658-0.018l-12.64,12.649
                    c-3.495,3.486-3.486,9.154,0.018,12.649l25.271,25.271L92.556,168.15c-3.495,3.495-3.495,9.145,0,12.64l12.64,12.649
                    c3.495,3.486,9.145,3.495,12.64,0l25.226-25.226l25.405,25.414c3.504,3.504,9.163,3.504,12.658,0.009l12.64-12.64
                    c3.495-3.495,3.486-9.154-0.009-12.658L168.352,142.924z M143.027,0.004C64.031,0.004,0,64.036,0,143.022
                    c0,78.996,64.031,143.027,143.027,143.027s143.027-64.031,143.027-143.027C286.054,64.045,222.022,0.004,143.027,0.004z
                    M143.027,259.232c-64.183,0-116.209-52.026-116.209-116.209s52.026-116.21,116.209-116.21s116.209,52.026,116.209,116.209
                    S207.21,259.232,143.027,259.232z"/>
                </g>
              </svg>
            </div>

            <div className="Userinfo">
                {/* {children} */}
                <figure><img src={worker} alt={user.name} /></figure>
                <h2 className="UserName">Hola  {" "}
                    {
                        userFetched 
                        ? ( <strong>
                                {user.name} {" "}
                                <span className="Points">{user.points} <img src={coin} alt="Puntos"/></span>
                                {/* <span className="Config" onClick={() => toggleMenuUser() }>&nbsp;</span> */}
                            </strong>
                            ) 
                        : <em>cargando usuario...</em>
                    }
                </h2>
            </div>
            <div className="HistRedeem">
                    {
                        historyFetched
                        ? ( 
                            <>
                              <h3>Productos canjeados:</h3>
                              <div>{ListRedeem} </div>

                              {history.length > 0
                                ? (<Link to="/history">
                                  <button class="btnAll" onClick={() => toggleMenuUser() }> Ver todos los productos canjeados</button>
                                </Link>)
                                : ''
                              }

                            </>
                          )  
                        : <em>cargando historial...</em>  
                    }
                    {/* {
                        history.length > 0
                        ? <button class="btnAll" onClick={() => toggleMenuUser() }> Ver todos los productos canjeados</button>
                        : ''
                      }     */}
            </div>

        </div>
    </div>

  );
}

export default Sidebar;

// export const Sidebar = ({ width, height children }) => {

//     return (
//         <div className="side-bar" style={{width: width, minHeight: height }}>
//           <React.Fragment>{children}<React.Fragment/>
//         </div>
//     );
//   };
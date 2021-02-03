import React, {useContext} from 'react';
import { AppContext } from "../context/storeRewardsContext";
import logo from '../assets/aerolab-logo.svg';
import coin from '../assets/icons/coin.svg';

function Sidebar({width, height, children}) {
    const { user, userFetched, xPosition, toggleMenuUser, history, historyFetched } = useContext(AppContext);

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
            <button onClick={() => toggleMenuUser() }>CLOSE X</button>
            <div className="Userinfo">
                {/* {children} */}
                <figure><img alt="User Pic" /></figure>
                <h2 className="UserName">Hola  {" "}
                    {
                        userFetched
                        ? ( <strong>
                                {user.name} {" "}
                                <span className="Points">{user.points} <img src={coin} alt="Puntos"/></span>
                                <span className="Config" onClick={() => toggleMenuUser() }>&nbsp;</span>
                            </strong>
                            ) 
                        : <em>cargando usuario...</em>
                    }
                </h2>
            </div>
            <div className="HistRedeem">
                    {
                        historyFetched
                        ? ( <p>aca productos
                            </p>    
                           )
                        : <em>cargando historial...</em>  
                    }
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
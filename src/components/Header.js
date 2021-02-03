import React, {useContext} from 'react';
import { AppContext } from "../context/storeRewardsContext";
import logo from '../assets/aerolab-logo.svg';// Tell Webpack this JS file uses this image
import coin from '../assets/icons/coin.svg';

function Header() {
    const { user, userFetched, toggleMenuUser } = useContext(AppContext);
    
    //const[user, setUser] = useState();

    // useEffect(() => {
    //     const headers = {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA4ODcxYTdlNzE4NzAwMjBlMzhlZTAiLCJpYXQiOjE2MTExNzE2MTB9.gRqbCL86qsiOXjaSoQeyuhM5e-wjonyGpb4gZqIf6sk"
    //         }
    //     } 
    //     fetch("https://coding-challenge-api.aerolab.co/user/me", headers)
    //     .then((header) => {
    //         return header.json();
    //     })
    //     .then((body) => {
    //         setUser(body);
    //         setftch(true);
    //     });
    // },[]);

  return (

    <header>
        <div className="container">
            <div className="ColLeft">
                <h1><a href="#"><img src={logo} alt="Logo"/></a></h1>
            </div>
            <div className="ColRight">
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

        </div>
    </header>

  );
}

export default Header;

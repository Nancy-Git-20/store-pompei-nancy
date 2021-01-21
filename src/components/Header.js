import React, {useState, useEffect} from 'react';
import logo from '../assets/aerolab-logo.svg';// Tell Webpack this JS file uses this image

function Header() {
    const[ftch, setftch] = useState(false);
    const[user, setUser] = useState();

    useEffect(() => {
        const headers = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA4ODcxYTdlNzE4NzAwMjBlMzhlZTAiLCJpYXQiOjE2MTExNzE2MTB9.gRqbCL86qsiOXjaSoQeyuhM5e-wjonyGpb4gZqIf6sk"
            }
        } 
        fetch("https://coding-challenge-api.aerolab.co/user/me", headers)
        .then((header) => {
            return header.json();
        })
        .then((body) => {
            setUser(body);
            setftch(true);
        });
    },[])

  return (

    <header>
        <div className="container">
            <div className="ColLeft">
                <h1><a href="#"><img src={logo} alt="Logo"/></a></h1>
            </div>
            <div className="ColRight">
                <h2>Hola {ftch
          ? user.name + " " + user.points + " puntos"
          : "cargando..."}{" "} </h2>
            </div>       

        </div>
    </header>

  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import { app, google, facebook } from './../firebase/firebase';



const Sociallogin = (props) => {
  const [auth, setAuth] = useState(null);
  let history = useHistory();

  useEffect(()=>{
    const g_try = localStorage.getItem('g_try');
    if (localStorage.g_try && g_try==="1"){
      autenticacion();
    }
  },[]);


  const autenticacionG = (evento) => {
    evento.preventDefault();
    localStorage.setItem('g_try', "1");
    app.auth().signInWithRedirect(google)
    .then(resp => console.log(resp)).catch(err => console.log(err));
  };

  const autenticacionF = (evento) => {
    evento.preventDefault();
    localStorage.setItem('g_try', "1");
    app.auth().signInWithRedirect(facebook)
    .then(resp => console.log(resp)).catch(err => console.log(err));
  };

  const autenticacion = () => {
    app.auth().getRedirectResult()
    .then(resp => handleThen(resp)).catch(err => handleError(err));
  };


  const handleError = (error) => {
    console.log("Error");
    console.log(error);
  };
  const handleThen = (respuesta) => {
    setAuth(respuesta);
    console.log("Login");
    console.log(respuesta);
    console.log(respuesta.user);
    localStorage.setItem('l', "1");
    localStorage.removeItem('g_try');
    if (respuesta.credential) {
      var token = respuesta.credential.accessToken;
      localStorage.setItem('token', token);
    }
    var user = respuesta.user.displayName;
    localStorage.setItem('user', user);
    history.push("/");
  };
  return (
    <div className="Sociallogin">
      <Button variant="contained" color="primary" onClick={autenticacionG} >Google login</Button><br/><br/>
      <Button variant="contained" color="primary" onClick={autenticacionF} >Facebook login</Button>
    </div>
  );
}

export default Sociallogin;

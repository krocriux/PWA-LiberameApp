import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';
import { app } from './../firebase/firebase';
import Sociallogin from './Sociallogin';


const Login = (props) => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [auth, setAuth] = useState(null);
  let history = useHistory();

  const autenticacion = (evento) => {
    evento.preventDefault();
    app.auth().signInWithEmailAndPassword(usuario, contrasena)
    .then(resp => handleThen(resp)).catch(err => handleError(err));
  };

  const handleError = (error) => {
    console.log("Error");
    console.log(error);
  };
  const handleThen = (respuesta) => {
    setAuth(respuesta);
    console.log("Login:");
    console.log(respuesta);
    //var token = respuesta.credential.accessToken;
    //localStorage.setItem('token', token);
    var user = respuesta.user;
    localStorage.setItem('user', user);
    console.log(user);
    console.log("Usuario, login exitoso");
    history.push("/");
  };
  return (
    <div className="Auth">
      <br/><br/>
      <TextField label="Usuario" variant="outlined"
      name="usuario"
      value = {usuario}
      onChange={(e) => setUsuario(e.target.value)}/><br/>
      <TextField type="password" label="Contraseña" variant="outlined"
      name="contrasena"
      value = {contrasena}
      onChange={(e) => setContrasena(e.target.value)}/><br/>
      <Button variant="contained" color="primary" onClick={autenticacion}>Inicio de Sesión Normal</Button><br/><br/>
      <Sociallogin/>
    </div>
  );
}


export default Login;

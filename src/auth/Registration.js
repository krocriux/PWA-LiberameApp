import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { app } from './../firebase/firebase';
import Sociallogin from './Sociallogin';





const Registration = (props) => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  let history = useHistory();

  const registro = (evento) => {
    evento.preventDefault();
    app.auth().createUserWithEmailAndPassword(usuario, contrasena)
    .then(resp => handleThen(resp)).catch(err => handleError(err));
  };

  const handleError = (error) => {
    console.log("Error");
    console.log(error);
  };
  const handleThen = (respuesta) => {
    console.log("Registration");
    console.log(respuesta);
    history.push("/");
  };
  return (
    <div className="Auth">
      <div>
        Usuario<br/>
        <input type="text" name="usuario"
        value = {usuario}
        onChange={(e) => setUsuario(e.target.value)}/><br/>
        Contraseña<br/>
        <input type="password" name="contrasena"
        value = {contrasena}
        onChange={(e) => setContrasena(e.target.value)}/><br/>
        <input type="submit" onClick={registro} value="enviar"/>
      </div>
      <div>
        Firebase<br/>
        <Sociallogin/>
      </div>
    </div>
  );
}

export default Registration;

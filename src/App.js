import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import { Button, ButtonGroup  } from '@material-ui/core';
import { app, bd } from './firebase/firebase';
import { connect } from 'react-redux';
import { intentoSolicitar, noSolicitar, login, logout, solicitarTipoUsuario, asignarTipoUsuario } from './store/acciones';
import Navegacion from './pagina/Navegacion';
import Cambiador from './pagina/Cambiador';


const App = (props) => {
  let history = useHistory();
  useEffect(()=>{
    obtenerEstadoUsuario();
  },[]);
  const obtenerEstadoUsuario = () => {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        bd.collection("usuarios").doc(app.auth().currentUser.uid).get()
        .then(result => {
          var data = result.data();
          if (data === undefined){
            props.solicitarTipoUsuario({uid:app.auth().currentUser.uid});
            history.push("/Setusuario");
            
          }else{
            props.login(Object.assign({},data,{uid:app.auth().currentUser.uid}));
            if (data.tipo === "client"){
              history.push("/Clients");
            }else{
              history.push("/Plumbers");
            }           
          }
        })
        .catch(r => console.log(r));
      }else{
        props.logout();
      }
    });
  };

  return (
    <div className="App">
      <Navegacion/>
      <Cambiador/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    estado: state.estado,
    auth: state.auth,
    usuario: state.usuario,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        intentoSolicitar: () => dispatch(intentoSolicitar()),
        noSolicitar: () => dispatch(noSolicitar()),
        login: (user) => dispatch(login(user)),
        logout: () => dispatch(logout()),
        solicitarTipoUsuario: (user) => dispatch(solicitarTipoUsuario(user)),
        asignarTipoUsuario: (user) => dispatch(asignarTipoUsuario(user)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
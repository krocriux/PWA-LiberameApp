import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import { Button, ButtonGroup  } from '@material-ui/core';
import { app, bd } from '../firebase/firebase';
import { Login, Logout, Registration } from '../auth/Auth';
import Navegacion from './Navegacion';
import { connect } from 'react-redux';
import { asignarTipoUsuario } from '../store/acciones';


const Setusuario = (props) => {
  let history = useHistory();
  const setPlumber = () => {
    bd.collection('usuarios').doc(props.uid).set({tipo:"plumber"});
    props.asignarTipoUsuario({tipo:"plumber",uid:props.uid});
    history.push("/Plumbers");
  }
  const setClient = () => {
    bd.collection('usuarios').doc(props.uid).set({tipo:"client"});
    props.asignarTipoUsuario({tipo:"plumber",uid:props.uid});
    history.push("/Clients");
  }
  return (
    <div className="Home">
      <br/> Setusuario<br/>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button onClick={setClient}>Client</Button>
        <Button onClick={setPlumber}>Plumber</Button>
      </ButtonGroup>
    </div>
  );
}




const mapStateToProps = state => {
  return {
    uid: state.usuario.uid,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        asignarTipoUsuario: (user) => dispatch(asignarTipoUsuario(user)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setusuario);
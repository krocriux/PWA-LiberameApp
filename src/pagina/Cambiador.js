import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import { Button, ButtonGroup  } from '@material-ui/core';
import { connect } from 'react-redux';

const Cambiador = (props) => {
  return (
    <Switch>
      {props.navegacion.map(item => (
        <Route exact path={item.ruta} component={item.componente}/>
        ))}
    </Switch>
  );
}

const mapStateToProps = state => {
  return {
    navegacion: state.navegacion,
  };
};

export default connect(mapStateToProps)(Cambiador);
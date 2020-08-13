import React from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Build as BuildI } from '@material-ui/icons';
import { connect } from 'react-redux';


const Navegacion = ({ navegacion }) => {
  let history = useHistory();
  const handleClick = (ruta) => {
    history.push(ruta);
  }
  return(
    <div>
      <AppBar color="default" position="static">
        <Toolbar>
          {navegacion.map(item => {
            if(item.nombre === "Home"){
              return (
                <IconButton edge="start" color="primary" aria-label="menu" onClick={() => handleClick(item.ruta)}>
                  {item.nombre}<BuildI/>
                </IconButton>);
            }else{
              return (
                <IconButton color="secondary" aria-label="menu" onClick={() => handleClick(item.ruta)}>
                  {item.nombre}<BuildI/>
                </IconButton>);
            }
          })}
          <Typography variant="h6"  >
           LibérameApp
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    navegacion: state.navegacion,
  };
};


export default connect(mapStateToProps)(Navegacion);
import { combineReducers } from 'redux';
import estados from './estados';


function estado(state = 'MIRANDO', accion) {
  switch (accion.type) {
    case 'INTENTO_SOLICITAR':
      return accion.nuevoEstado;
    case 'NO_SOLICITAR':
      return accion.nuevoEstado;
    case 'SOLICITAR':
      return accion.nuevoEstado;
    default:
      return state;
  }
}

function usuario(state = estados.usuario, accion) {
  switch (accion.type) {
    case 'AUTENTICAR':
      return accion.nuevoEstado.usuario;
    case 'TERMINAR_SESION':
      return accion.nuevoEstado.usuario;
    case 'SOLICITAR_TIPO_USUARIO':
      return accion.nuevoEstado.usuario;
    case 'ASIGNAR_TIPO_USUARIO':
      return accion.nuevoEstado.usuario;
    default:
      return state;
  }
}

function auth(state = estados.auth, accion) {
  switch (accion.type) {
    case 'AUTENTICAR':
      console.log("Login en redux");
      return accion.nuevoEstado.auth;
    case 'TERMINAR_SESION':
      console.log("Termino en redux");
      return accion.nuevoEstado.auth;
    case 'SOLICITAR_TIPO_USUARIO':
      return accion.nuevoEstado.auth;
    case 'ASIGNAR_TIPO_USUARIO':
      console.log("Asignado en Redux");
      return accion.nuevoEstado.auth;
    default:
      return state;
  }
}

function navegacion(state = estados.navegacion, accion) {
  switch (accion.type) {
    case 'AUTENTICAR':
      return accion.nuevoEstado.navegacion;
    case 'TERMINAR_SESION':
      return accion.nuevoEstado.navegacion;
    case 'SOLICITAR_TIPO_USUARIO':
      return accion.nuevoEstado.navegacion;
    case 'ASIGNAR_TIPO_USUARIO':
      return accion.nuevoEstado.navegacion;
    default:
      return state;
  }
}

function reservas(state = [], accion) {
  switch (accion.type) {
    case 'SOLICITAR':
      return accion.solicitud;
    default:
      return state;
  }
}

let reductorRaiz = combineReducers({ estado, reservas, auth, navegacion, usuario });


export default reductorRaiz;
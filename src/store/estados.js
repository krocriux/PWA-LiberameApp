import React from 'react';
import { Login, Logout, Registration } from '../auth/Auth';
import Setusuario from '../pagina/Setusuario';
import Plumbers from '../pagina/Plumbers';
import Clients from '../pagina/Clients';
import Home from '../pagina/Home';

export const estados = {
  MIRANDO: 'MIRANDO',
  SOLICITANDO: 'SOLICITANDO',
  SOLICITADO: 'SOLICITADO'
}

export const auth = {
  NO_AUTENTICADO: 'NO_AUTENTICADO',
  AUTENTICADO: 'AUTENTICADO',
  SIN_TIPO_USUARIO: 'SIN_TIPO_USUARIO'
}

export const usuario = {
  NO_AUTENTICADO: {tipo:'anonimo'},
  AUTENTICADO: {},
  SIN_TIPO_USUARIO: {tipo:'sin_tipo'},
}

export const navegacion = {
  NO_AUTENTICADO: [
  	{nombre: "Home", ruta: "/", componente: Home},
  	{nombre: "Login", ruta: "/Login", componente: () => <Login /> },
  	{nombre: "Registration", ruta: "/Registration", componente: () => <Registration/>},
  	{nombre: "Plumbers", ruta: "/Plumbers", componente: Plumbers},
  	{nombre: "Clients", ruta: "/Clients", componente: Clients},
  	],
  AUTENTICADO: [
  	{nombre: "Home", ruta: "/", componente: Home},
  	{nombre: "Logout", ruta: "/Logout", componente: () => <Logout />},
  	{nombre: "Set Tipo Usuario", ruta: "/Setusuario", componente: () => <Setusuario/>},
  	{nombre: "Plumbers", ruta: "/Plumbers", componente: Plumbers},
  	{nombre: "Clients", ruta: "/Clients", componente: Clients},
  	],
  SIN_TIPO_USUARIO: [
  	{nombre: "Set Tipo Usuario", ruta: "/Setusuario", componente: () => <Setusuario/>},
  	],
}

export default { auth:auth.NO_AUTENTICADO, navegacion:navegacion.NO_AUTENTICADO, usuario:usuario.NO_AUTENTICADO };
import { estados, auth, navegacion, usuario } from './estados';
export const transisiones = {
	INTENTO_SOLICITAR : {
	  tipo: 'INTENTO_SOLICITAR',
	  nuevoEstado: estados.SOLICITANDO},
	NO_SOLICITAR : {
	  tipo: 'NO_SOLICITAR',
	  nuevoEstado: estados.MIRANDO},
	SOLICITAR : {
	  tipo: 'SOLICITAR',
	  nuevoEstado: estados.SOLICITADO},
	AUTENTICAR : {
	  tipo: 'AUTENTICAR',
	  nuevoEstado: {
	  	auth: auth.AUTENTICADO,
	  	navegacion: navegacion.AUTENTICADO,
	  	usuario: usuario.AUTENTICADO}
	  },
	TERMINAR_SESION : {
	  tipo: 'TERMINAR_SESION',
	  nuevoEstado: {
	  	auth: auth.NO_AUTENTICADO,
	  	navegacion: navegacion.NO_AUTENTICADO,
	  	usuario: usuario.NO_AUTENTICADO}
	  },
	SOLICITAR_TIPO_USUARIO : {
	  tipo: 'SOLICITAR_TIPO_USUARIO',
	  nuevoEstado: {
	  	auth: auth.SIN_TIPO_USUARIO,
	  	navegacion: navegacion.SIN_TIPO_USUARIO,
	  	usuario: usuario.SIN_TIPO_USUARIO}
	  },
	ASIGNAR_TIPO_USUARIO : {
	  tipo: 'ASIGNAR_TIPO_USUARIO',
	  nuevoEstado: {
	  	auth: auth.AUTENTICADO,
	  	navegacion: navegacion.AUTENTICADO,
	  	usuario: usuario.AUTENTICADO}
	  },


}
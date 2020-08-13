import { transisiones } from './transisiones'

export const intentoSolicitar = () => ({
  type: transisiones.INTENTO_SOLICITAR.tipo,
  nuevoEstado: transisiones.INTENTO_SOLICITAR.nuevoEstado,
})

export const noSolicitar = () => ({
  type: transisiones.NO_SOLICITAR.tipo,
  nuevoEstado: transisiones.NO_SOLICITAR.nuevoEstado
})

export const solicitar = sol => ({
  type: transisiones.SOLICITAR.tipo,
  nuevoEstado: transisiones.SOLICITAR.nuevoEstado,
  solicitud: sol

})

export const login = (user) => ({
  type: transisiones.AUTENTICAR.tipo,
  nuevoEstado: Object.assign({},transisiones.AUTENTICAR.nuevoEstado,{usuario:user})
})

export const logout = () => ({
  type: transisiones.TERMINAR_SESION.tipo,
  nuevoEstado: transisiones.TERMINAR_SESION.nuevoEstado,
})

export const solicitarTipoUsuario = (user) => ({
  type: transisiones.SOLICITAR_TIPO_USUARIO.tipo,
  nuevoEstado: Object.assign({},transisiones.SOLICITAR_TIPO_USUARIO.nuevoEstado,{usuario:user})
})

export const asignarTipoUsuario = (user) => ({
  type: transisiones.ASIGNAR_TIPO_USUARIO.tipo,
  nuevoEstado: Object.assign({},transisiones.ASIGNAR_TIPO_USUARIO.nuevoEstado,{usuario:user})
})
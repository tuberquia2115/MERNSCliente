import React, { useReducer } from 'react';
import AuthReducer from './authReducer'
import AuthContext from './authContext';
import clienteAxios from '../../config/axios';
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
} from "../../types";

const AuthState = props => {


    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);


    // Las Funciones
    const registraUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            console.log(respuesta);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })
            usuarioAutenticado()
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    // retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            // TODO: función para enviar el token por headers
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            console.log("respuesta de la función de usuarioAutenticado", respuesta);
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }

    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registraUsuario
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState

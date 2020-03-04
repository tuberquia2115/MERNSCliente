import React, { useReducer } from 'react';
import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer'
import { FORMULARIO_PROYECTO } from '../types'

const ProyectoState = (props) => {
    const initialState = {
        proyectos: [
            { id: 1, nombre: 'Tienda Virtual' },
            { id: 2, nombre: 'Intranet' },
            { id: 3, nombre: 'Diseño de sitio web' },
            { id: 4, nombre: 'MERN' },
        ],
        formulario: false,
    }
    // dispatch  para ejecutar la acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Serie de funciones para el CRUD;

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;
import React, { useReducer } from 'react';
import  * as uuid from 'uuid';
import ProyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer'
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO
} from '../types'


const ProyectoState = (props) => {
    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de sitio web' },
        { id: 4, nombre: 'MERN' },
    ]
    const initialState = {
        proyectos: [],
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

    //obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // Agregar nuevo proyectos
    const agregarProyecto = proyecto => {
        proyecto.id = uuid.v4();
        // Insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }


    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                obtenerProyectos,
                mostrarFormulario,
                agregarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;
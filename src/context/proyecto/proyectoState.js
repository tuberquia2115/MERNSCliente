import React, { useReducer } from 'react';
import ProyectoContext from '../proyecto/proyectoContext';
import proyectoReducer from '../proyecto/proyectoReducer'
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
} from '../../types'
import clienteAxios from '../../config/axios'


const ProyectoState = (props) => {

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null,
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
    const obtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos');
            console.log(resultado);
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            })
        } catch (error) {
            console.log(error);
        }
    }
    // Agregar nuevo proyectos
    const agregarProyecto = async  proyecto => {
        // Insertar el proyecto en el state
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);

            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {


        }
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // validar formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    // Seleccionar el proyecto que el usuario dio click
    const proyectoActual = proyecto => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyecto
        })
    }
    // Eliminar proyecto

    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }


    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                obtenerProyectos,
                mostrarFormulario,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto,

            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;
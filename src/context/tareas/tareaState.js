import React, { useReducer } from 'react'
import tareaReducer from './tareaReducer'
import TareaContext from './tareaContext';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA
} from '../../types';


const TareaState = (props) => {

    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir plataformas de pagos', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
            { id: 5, nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
            { id: 6, nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { id: 7, nombre: 'Elegir plataformas de pagos', estado: false, proyectoId: 3 },
            { id: 8, nombre: 'Elegir plataforma', estado: true, proyectoId: 4 },
            { id: 9, nombre: 'Elegir colores', estado: false, proyectoId: 1 },
            { id: 10, nombre: 'Elegir plataformas de pagos', estado: false, proyectoId: 2 },
            { id: 11, nombre: 'Elegir plataforma', estado: true, proyectoId: 3 },
            { id: 12, nombre: 'Elegir colores', estado: false, proyectoId: 4 },
            { id: 13, nombre: 'Elegir plataformas de pagos', estado: false, proyectoId: 3 },

        ],
        tareasproyecto: null,
        errortarea: false
    }
    // creado el dispatch y el state
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    // series de funciones para el CRUD
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }


    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // VALIDA Y MUESTRA UN ERROR
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Eliminar tarea por su id
    const eliminarTarea = tareaId => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tareaId
        })
    }

    // Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState
import React, { useReducer } from 'react'
import tareaReducer from './tareaReducer'
import TareaContext from './tareaContext';
import * as uuid from 'uuid';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
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
        errortarea: false,
        tareaseleccionada: null
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
        tarea.id = uuid.v4();
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

    // Extraer una tarea para edición
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    // MODIFICA UNA TAREA 
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea,
        })
    }

    // Elimina la tarea seleccionada

    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea,
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState
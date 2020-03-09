import React, { useReducer } from 'react'
import tareaReducer from './tareaReducer'
import TareaContext from './tareaContext';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA
} from '../../types';


const TareaState = (props) => {

    const initialState = {
        tareas: [
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir plataformas de pagos', estado: false, proyectoId: 3 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir plataformas de pagos', estado: false, proyectoId: 3 },
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 4 },
            { nombre: 'Elegir colores', estado: false, proyectoId: 1 },
            { nombre: 'Elegir plataformas de pagos', estado: false, proyectoId: 2 },
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 3 },
            { nombre: 'Elegir colores', estado: false, proyectoId: 4 },
            { nombre: 'Elegir plataformas de pagos', estado: false, proyectoId: 3 },

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
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState
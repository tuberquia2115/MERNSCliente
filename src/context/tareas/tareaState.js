import React, { useReducer } from 'react'
import tareaReducer from './tareaReducer'
import TareaContext from './tareaContext';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA,
    CERRAR_SESION
} from '../../types';
import clienteAxios from '../../config/axios';


const TareaState = (props) => {

    const initialState = {
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada: null
    }
    // creado el dispatch y el state
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    // series de funciones para el CRUD
    const obtenerTareas = async proyecto => {
        try {
            const resultado = await clienteAxios.get('api/tareas', { params: { proyecto } });

            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error.response);
        }
    }


    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            if (resultado) {
                dispatch({
                    type: AGREGAR_TAREA,
                    payload: resultado.data.tarea
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    // VALIDA Y MUESTRA UN ERROR
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Eliminar tarea por su id
    const eliminarTarea = async (id, proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto } })
        } catch (error) {
            console.log(error)
        }
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    // MODIFICA UNA TAREA 
    const actualizarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea,
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Extraer una tarea para edición
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // Elimina la tarea seleccionada

    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }
    // Vaciar tareas del proyecto
    const vaciarTareasProyecto = () =>{
        dispatch({
            type: CERRAR_SESION
        })
    }
    return (
        <TareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea,
                vaciarTareasProyecto
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState
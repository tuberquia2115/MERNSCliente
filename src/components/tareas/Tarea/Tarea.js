import React, { useContext } from 'react';
import TareaContext from '../../../context/tareas/tareaContext';
import ProyectoContext from '../../../context/proyecto/proyectoContext'

const Tarea = ({ tarea }) => {

    // Extraer el proyecto que se encuentra en activo

    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

    // obtener la función del context de tarea
    const tareasContext = useContext(TareaContext);
    const { actualizarTarea, eliminarTarea, guardarTareaActual } = tareasContext;

    const [proyectoActual] = proyecto

    // Función que se ejecuta cuando el usuario presione btn de eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id, proyectoActual._id)  
    }
    // Función que modifica el estado de la tareas
    const cambiarEstado = tarea => {
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        actualizarTarea(tarea);
    }


    // Agregar una tarea actual cuando el usuario quiera editarla
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }
    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                    ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => (
                        seleccionarTarea(tarea)
                    )}
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => {
                        tareaEliminar(tarea._id)
                    }}
                >Eliminar</button>


            </div>

        </li>
    )
}

export default Tarea;
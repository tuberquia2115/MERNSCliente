import React, { useContext } from 'react';
import TareaContext from '../../../context/tareas/tareaContext';
import ProyectoContext from '../../../context/proyecto/proyectoContext'

const Tarea = ({ tarea }) => {

    // Extraer el proyecto que se encuentra en activo

    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

    // obtener la función del context de tarea
    const tareasContext = useContext(TareaContext);
    const { obtenerTareas, eliminarTarea } = tareasContext;

    const [proyectoActual] = proyecto

    // Función que se ejecuta cuando el usuario presione btn de eliminar tarea
    const tareaEliminar = tarea => {
        eliminarTarea(tarea.id)
        obtenerTareas(proyectoActual.id)
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
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => {
                        tareaEliminar(tarea)
                    }}
                >Eliminar</button>


            </div>

        </li>
    )
}

export default Tarea;
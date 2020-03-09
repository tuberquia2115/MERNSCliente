import React, { useContext } from 'react';
import Tarea from '../Tarea/Tarea';
import ProyectoContext from '../../../context/proyecto/proyectoContext';
import TareaContext from '../../../context/tareas/tareaContext';

const ListadoTareas = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext)
    const tareasContext = useContext(TareaContext);
    const { proyecto, eliminarProyecto } = proyectosContext;
    const { tareas } = tareasContext;

    // Si no hay proyecto seleccionado

    if (!proyecto) return <h2>Selecciona un proyecto</h2>;

    // array destructuring para extraer el proyectos actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = []

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }
    return (
        <React.Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea">No hay tareas</li>)
                    : Array.isArray(tareasProyecto) && tareasProyecto.map(tarea => (
                        <Tarea tarea={tarea} />
                    ))
                }

            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </React.Fragment>
    )
}
export default ListadoTareas;
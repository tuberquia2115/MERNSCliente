import React, { useContext } from 'react';
import proyectoContext from '../../../context/proyecto/proyectoContext';
import TareaContext from '../../../context/tareas/tareaContext';

const Project = ({ project }) => {
    // obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);

    const { proyectoActual } = proyectosContext;


    //obtener las funciones del context de tareas
    const tareasContext = useContext(TareaContext);
    const { obtenerTareas } = tareasContext;

    // función para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id) // fijar un proyecto actual
        obtenerTareas(id); // filtrar las tareas cuando se da click
    }
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(project._id)}
            >
                {project.nombre}
            </button>
        </li>
    )
}
export default Project
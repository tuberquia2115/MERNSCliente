import React, { useContext } from 'react';
import proyectoContext from '../../../context/proyectoContext';

const Project = ({ project }) => {

    // obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => {
                    proyectoActual(project.id)
                }}
            >
                {project.nombre}
            </button>
        </li>
    )
}
export default Project
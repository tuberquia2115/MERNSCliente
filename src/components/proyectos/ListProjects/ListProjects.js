import React, { useContext } from 'react';
import proyectoContext from '../../../context/proyectoContext'
import Project from '../Project/Project';


const ListProjects = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos } = proyectosContext;

    // revisar si proyectos tiene contenidos
    if (proyectos.length === 0) return null;
    return (
        <ul className="listado-proyectos">
            {Array.isArray(proyectos) && proyectos.map(proyecto => (
                <Project
                    key={proyecto.id}
                    project={proyecto} />
            ))}
        </ul>
    )
}
export default ListProjects;
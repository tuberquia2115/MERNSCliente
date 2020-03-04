import React from 'react';
import Project from '../Project/Project';


const ListProjects = () => {
    const proyectos = [
        { nombre: 'Tienda Virtual' },
        { nombre: 'Intranet' },
        { nombre: 'Diseño de sitio web' },
    ]
    return (
        <ul className="listado-proyectos">
            {Array.isArray(proyectos) && proyectos.map(proyecto => (
                <Project project={proyecto} />
            ))}
        </ul>
    )
}
export default ListProjects;
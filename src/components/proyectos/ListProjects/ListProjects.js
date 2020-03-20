
import React, { useContext, useEffect } from 'react';
import proyectoContext from '../../../context/proyecto/proyectoContext'
import Project from '../Project/Project';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const ListProjects = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;


    // obtener pro
    useEffect(() => {
        obtenerProyectos()
        //eslint-disable-next-line
    }, [])
    // revisar si proyectos tiene contenidos
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;
    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {Array.isArray(proyectos) && proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
                        timeout={300}
                        classNames="proyecto"
                    >
                        <Project
                            project={proyecto} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}
export default ListProjects;
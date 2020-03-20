
import React, { useContext, useEffect } from 'react';
import proyectoContext from '../../../context/proyecto/proyectoContext'
import AlertaContext from '../../../context/alertas/alertasContext';
import Project from '../Project/Project';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const ListProjects = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, mensaje, obtenerProyectos } = proyectosContext;

    // extraer los context de state
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext


    // obtener proyecto
    useEffect(() => {
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        obtenerProyectos()
        //eslint-disable-next-line
    }, [mensaje])
    // revisar si proyectos tiene contenidos
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;
    return (
        <ul className="listado-proyectos">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
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
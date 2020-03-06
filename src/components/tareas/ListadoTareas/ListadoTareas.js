import React, { useContext } from 'react';
import Tarea from '../Tarea/Tarea';
import ProyectoContext from '../../../context/proyectoContext';

const ListadoTareas = () => {


    const proyectosContext = useContext(ProyectoContext)
    const { proyecto } = proyectosContext;
    const tareasProyecto = [
        { nombre: 'Elegir plataforma', estado: true },
        { nombre: 'Elegir colores', estado: false },
        { nombre: 'Elegir plataformas de pagos', estado: false },
        { nombre: 'Elegir hosting', estado: true },
    ]
    return (
        <React.Fragment>
            <h2>Proyecto: {proyecto[0]}</h2>
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
            >Eliminar Proyecto &times;</button>
        </React.Fragment>
    )
}
export default ListadoTareas;
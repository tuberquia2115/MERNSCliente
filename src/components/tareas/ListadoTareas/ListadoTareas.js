import React, { useContext } from 'react';
import Tarea from '../Tarea/Tarea';
import ProyectoContext from '../../../context/proyecto/proyectoContext';
import TareaContext from '../../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListadoTareas = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext)
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Extrayendo las tareas del context de tarea
    const tareasContext = useContext(TareaContext);
    const { tareasproyecto } = tareasContext;

    // Si no hay proyecto seleccionado

    if (!proyecto) return <h2>Selecciona un proyecto</h2>;

    // array destructuring para extraer el proyectos actual
    const [proyectoActual] = proyecto;



    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }
    return (
        <React.Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea">No hay tareas</li>)
                    :
                    <TransitionGroup>
                        {Array.isArray(tareasproyecto) && tareasproyecto.map(tarea => (
                            <CSSTransition
                                key={tarea.id}
                                timeout={300}
                                classNames="tarea"
                            >
                                <Tarea
                                    tarea={tarea} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
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
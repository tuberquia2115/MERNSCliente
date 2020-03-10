import React, { useContext, useState, useEffect } from 'react';
import ProyectoContext from '../../../context/proyecto/proyectoContext';
import TareaContext from '../../../context/tareas/tareaContext';



const FormTarea = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;


    // Extraer la función del context de tareas
    const tareasContext = useContext(TareaContext);
    const {
        tareaseleccionada,
        errortarea,
        agregarTarea,
        validarTarea,
        obtenerTareas,
        actualizarTarea,
        limpiarTarea,
    } = tareasContext;

    // useState para guardar la tarea
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })
    // destructuring al array
    const { nombre } = tarea

    // Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if (tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada);
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada])
    // Si no hay proyecto seleccionado
    if (!proyecto) return null

    // array destructuring para extraer el proyectos actual
    const [proyectoActual] = proyecto;

    // capturar el nombre de la tarea
    const handleChange = (e) => {
        guardarTarea({
            ...tarea, [e.target.name]: e.target.value
        })
    }
    const onSubmitAgregarTarea = e => {
        e.preventDefault();

        // validad tarea
        if (nombre.trim() === '') {
            validarTarea()
            return;
        }
        // si es edición o si es nueva tarea
        if (tareaseleccionada === null) {
            //agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id
            tarea.estado = false
            agregarTarea(tarea)
        } else {
            // actualizar tarea
            actualizarTarea(tarea);

            // Elimina tarea seleccionada del state
            limpiarTarea()
        }
        // obtener y limpiar las tareas del proyecto  actual

        obtenerTareas(proyectoActual.id);

        // limpiar el state
        guardarTarea({
            nombre: ''
        })
    }
    return (
        <div className="formulario">
            <form
                onSubmit={onSubmitAgregarTarea}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />

                </div>
            </form>
            {errortarea ? <p className="mensaje error">Nombre de la tarea es obligatorio</p> : null}
        </div>
    )
}
export default FormTarea;
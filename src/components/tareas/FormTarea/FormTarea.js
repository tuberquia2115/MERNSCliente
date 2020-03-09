import React, { useContext, useState } from 'react';
import ProyectoContext from '../../../context/proyecto/proyectoContext';
import TareaContext from '../../../context/tareas/tareaContext';



const FormTarea = () => {

    // useState para guardar la tarea
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })
    // destructuring al array
    const { nombre } = tarea
    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;


    // Extraer la función del context de tareas
    const tareasContext = useContext(TareaContext);
    const { agregarTarea } = tareasContext;


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

        // validad
        if (nombre.trim() === '') {
            return;
        }


        // pasar la validación


        //agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id
        tarea.estado = false
        agregarTarea(tarea)


        // limpiar el state
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
                        value="Agregar Tarea"
                    />

                </div>
            </form>
        </div>
    )
}
export default FormTarea;
import React, { useContext, useState } from 'react';
import ProyectoContext from '../../../context/proyecto/proyectoContext';


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

    // capturar el nombre de la tarea
    const handleChange = (e) => {
        guardarTarea({
            ...tarea, [e.target.name]: e.target.value
        })
    }
    const agregarTarea = e => {
        e.preventDefault();

        // validad


        // pasar al state


        // limpiar tarea
    }
    // Si no hay proyecto seleccionado
    if (!proyecto) return null
    // array destructuring para extraer el proyectos actual
    const [proyectoActual] = proyecto;
    return (
        <div className="formulario">
            <form
                onSubmit={agregarTarea}
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
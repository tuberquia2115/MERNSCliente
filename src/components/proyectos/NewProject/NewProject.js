import React, { useState, useContext } from 'react';
import proyectoContext from '../../../context/proyectoContext';
const NewProject = () => {


    // obtener el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const { formulario, mostrarFormulario } = proyectosContext;
    // state para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    const { nombre } = proyecto

    const handleChange = (e) => {
        guardarProyecto({
            ...proyecto, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // validar proyecto


        // agregar al state


        // Reiniciar el formulario

    }
    return (
        <React.Fragment>
            <button
                onClick={() => { mostrarFormulario() }}
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            {formulario ?
                (
                    <form
                        onSubmit={handleSubmit}
                        className="formulario-nuevo-proyecto"
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre del proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={handleChange}
                        />

                        <input
                            className="btn btn-primario btn-block"
                            type="submit"
                            value="Agregar Proyecto"
                        />

                    </form>
                )
                : null

            }

        </React.Fragment>
    )
}
export default NewProject
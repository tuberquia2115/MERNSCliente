import React, { useState, useContext } from 'react';
import proyectoContext from '../../../context/proyectoContext';
const NewProject = () => {


    // obtener el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const {
        formulario,
        mostrarFormulario,
        errorformulario,
        agregarProyecto,
        mostrarError
    } = proyectosContext;
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
        if (nombre.trim() === '') {
            mostrarError();
            return;
        }


        // agregar al state
        agregarProyecto(proyecto)

        // Reiniciar el formulario

        guardarProyecto({
            nombre: ''
        })

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
                : null}
            {errorformulario ? <p className="mensaje error">El nombre de proyecto es obligatorio</p> : null}

        </React.Fragment>
    )
}
export default NewProject
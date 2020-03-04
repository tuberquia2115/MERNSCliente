import React from 'react';
const NewProject = () => {
    return (
        <React.Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevos Proyecto</button>

            <form
                className="formulario-nuevo-proyecto"
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre del proyecto"
                    name="nombre"
                />

                <input
                    className="btn btn-primario btn-block"
                    type="submit"
                    value="Agregar Proyecto"
                />

            </form>
        </React.Fragment>
    )
}
export default NewProject
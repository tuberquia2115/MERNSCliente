import React from 'react';
import Sidebar from '../../layout/Sidebar/Sidebar';
import Nav from '../../layout/Nav/Nav';
import FormTarea from '../../tareas/FormTarea/FormTarea';
import ListadoTareas from '../../tareas/ListadoTareas/ListadoTareas';

const Projects = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Nav />
                <main>
                    <FormTarea />
                    <div className="contenedor-tareas">
                        <ListadoTareas />
                    </div>
                </main>
            </div>


        </div>
    );
}

export default Projects;
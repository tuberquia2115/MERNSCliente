import React, { useContext, useEffect } from 'react';
import Sidebar from '../../layout/Sidebar/Sidebar';
import Nav from '../../layout/Nav/Nav';
import FormTarea from '../../tareas/FormTarea/FormTarea';
import ListadoTareas from '../../tareas/ListadoTareas/ListadoTareas';
import AuthContext from '../../../context/autenticacion/authContext';

const Projects = () => {

    // Extraer la información de autenticación

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext

    useEffect(() => {
        usuarioAutenticado()
        // eslint-disable-next-line
    }, [])
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
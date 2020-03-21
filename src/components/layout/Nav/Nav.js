import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/autenticacion/authContext';
import ProyectoContext from '../../../context/proyecto/proyectoContext';
import TareaContext from '../../../context/tareas/tareaContext';

const Nav = () => {

    // EXTRAER EL STATE DE CONTEXT DEL AUTHCONTEXT
    const authContext = useContext(AuthContext);
    const tareaContext = useContext(TareaContext);
    const proyectoContext = useContext(ProyectoContext);

    
    const { vaciarTareasProyecto } = tareaContext;
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;
    const { vaciarProyecto } = proyectoContext

    const salir = () => {
        cerrarSesion();
        vaciarProyecto();
        vaciarTareasProyecto()
    }

    useEffect(() => {
        usuarioAutenticado()
        // eslint-disable-next-line
    }, [])

    return (
        <header className="app-header">
            {usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p> : null}

            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => salir()}
                >
                    Cerrar Sesión
                </button>
            </nav>
        </header>
    )
}

export default Nav;
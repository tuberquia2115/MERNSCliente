import React from 'react';

const Nav = () => {

    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Jose Manuel</span></p>
            <nav className="nav-principal">
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
    )
}

export default Nav;
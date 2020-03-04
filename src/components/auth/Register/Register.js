import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Register = () => {
    // state para iniciar sesión

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: '',
    })
    const { nombre, email, password, confirmar } = usuario

    const handleChange = (e) => {
        guardarUsuario({
            ...usuario, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();

        // validar que no haya campos vacíos


        // password mínimo de 6 caracteres

        // los 2 password sean iguales
        

        // pasar al action
    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener cuenta</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tú Nombre"
                            value={nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tú Email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tú Password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tú contraseña"
                            value={confirmar}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                    <Link
                        to={'/'}
                        className="enlace-cuenta">
                        Volver a iniciar sesión
                     </Link>

                </form>
            </div>

        </div>

    );
}

export default Register;
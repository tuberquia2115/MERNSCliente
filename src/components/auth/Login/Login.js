import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    // state para iniciar sesión

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })
    const { email, password } = usuario

    const handleChange = (e) => {
        guardarUsuario({
            ...usuario, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();

        // validar que no haya campos vacíos


        // pasar al action
    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={handleSubmit}
                >
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
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                    <div>
                        Sí no tiene cuenta haga click en el siguiente enlace
                        <Link to={'/register'} className="enlace-cuenta">
                            REGISTRARSE
                        </Link>
                    </div>
                </form>
            </div>

        </div>

    );
}

export default Login;
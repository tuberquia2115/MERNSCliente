import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import AlertaContext from '../../../context/alertas/alertasContext';
import AuthContext from '../../../context/autenticacion/authContext';

const Login = (props) => {
    const { history } = props

    // Extraer el state de alertContext
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // Extraer state del context de AuthContext
    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

    // en caso de que el password no existe o la cuenta
    useEffect(() => {
        if (autenticado) {
            history.push('/projects');
        }
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
    }, [autenticado, mensaje, history])


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
        if (email.trim() === '' || password.trim() === '') {
            mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
            return;
        }
        // pasar al action
        iniciarSesion({ email, password });

    }


    return (
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
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
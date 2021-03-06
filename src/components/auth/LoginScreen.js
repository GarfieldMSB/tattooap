import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'

/**
 * LoginScreen es la página principal que contiene el formulario de inicio de sesión.
 * Se utiliza el hook useForm para tener control del formulario
 * @returns {DOMElement}
 */

export const LoginScreen = () => {

    // Hook - useForm
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
    });
    const {email, password} = formValues;

    // Login de usuario
    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <h3 className='auth__title'>Login</h3>
            <form onSubmit={ handleLogin }>
                <input 
                    className='auth__input'
                    type='email'
                    placeholder='Correo'
                    name='email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    className='auth__input'
                    type='password'
                    placeholder='Contraseña'
                    name='password'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    className='btn btn-primary btn-block'
                    type='submit'
                >
                    Iniciar sesión
                </button>
                {/** Boton de Google */}
                <div className='auth__social-networks'>
                    <p>Login with social networks</p>

                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to='/auth/register' className='link'>
                    Crear una nueva cuenta
                </Link>
            </form>
        </>
    )
}

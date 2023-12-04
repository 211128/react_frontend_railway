import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useAuth from '../hooks/UserAuth';  
import FooterA from '../components/footer';
import AlertLogin from './alerts/wronglogin';
import Success from './alerts/succes';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { setAuthenticatedUser } = useAuth();  // Obtener la función setAuthenticatedUser del hook

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3006/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }

      const user = await response.json();

      // Guardar el usuario en el almacenamiento local y actualizar el estado global
      localStorage.setItem('authenticatedUser', JSON.stringify(user));
      setAuthenticatedUser(user);
      console.log(localStorage)
      console.log(user)

      setSuccess(true);
      setError(null);
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    }
  };
  
  if (success) {
    return <Navigate to="/muscles" />;
  }


  return (
    <>
      {/* Mostrar el componente de alerta solo si hay un error */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            EntrenAT
          </a>
          {error && <AlertLogin message={error} />}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login - Ingresa a tu cuenta!
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Recordar contraseña</label>
                    </div>
                  </div>
                  <Link to="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Olvidaste tu Contraseña?</Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Ingresar
                </button>
                {success && <Success />}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  No tienes cuenta aún? <Link to="/registro">Regístrate</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <FooterA></FooterA>
      </section>
    </>
  );
}

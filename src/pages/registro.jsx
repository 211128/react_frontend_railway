import React, { useState } from 'react';
//import { loginContext } from "../contexts/login";
import FooterA from "../components/footer";
import AlertPassword from "../components/alerts/wrongpassword";
import AlertData from '../components/alerts/wrongdata';
import AlertOk from '../components/alerts/succes';
import { Navigate } from 'react-router-dom';


export default function Register() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        sex: 'male',
        height: 0,
        weight: 0,
        password: '',
        confirmPassword: '',
    });

    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [dataError, setDataError] = useState(true);
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setPasswordsMatch(false);
            return;
        }

        // Verificar si la altura o el peso son iguales a 0
        if (formData.height !== 0 || formData.weight !== 0) {
            setPasswordsMatch(true);
        } else {
            // Mostrar error si la altura o el peso son iguales a 0
            setDataError(false);
            return;
        }

        // Verificar restricciones de la contraseña
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (!passwordRegex.test(formData.password)) {
            setPasswordError('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula y un número.');
            return;
        }

        // Contraseñas coinciden, altura/peso no son 0 y la contraseña cumple con las restricciones
        setPasswordsMatch(true);
        setDataError(true);
        setPasswordError('');

        // Eliminar confirmPassword del objeto formData
        const { confirmPassword, ...requestData } = formData;


        try {
            console.log('Form Data:', requestData);

            const response = await fetch('https://users.entranat.site/register/', {
                method: 'POST',
                type: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                console.log('Usuario registrado exitosamente.');
                setSuccess(true); 
                // Puedes redirigir o realizar otras acciones después de un registro exitoso
              
            } else {
                console.error('Error al registrar el usuario:', response.statusText);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    if (success) {
        return <Navigate to="/" />;
      }


    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        EntrenAT
                    </a>
                    

                    {!passwordsMatch && <AlertPassword />}
                    {!dataError && <AlertData />}
                    {passwordError && (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="font-medium">Error:</span> {passwordError}
                        </div>
                    )}

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Regístrate - Crea una Cuenta!
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@ejemplo.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Nombre completo"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Sexo
                                    </label>
                                    <select
                                        name="gender"
                                        id="gender"
                                        value={formData.sex}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    >
                                        <option value="male">Masculino</option>
                                        <option value="female">Femenino</option>
                                    </select>
                                </div>
                               
                                <div>
                                    <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estatura</label>
                                    <input
                                        type="number"
                                        name="height"
                                        id="height"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Altura en metros"
                                        required
                                        value={formData.height}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Peso</label>
                                    <input
                                        type="number"
                                        name="weight"
                                        id="weight"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Peso en kg"
                                        required
                                        value={formData.weight}
                                        onChange={handleChange}
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
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Contraseña</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                {success && <AlertOk />}

                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Registrarme!
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <FooterA></FooterA>
            </section>

        </>
    );
}

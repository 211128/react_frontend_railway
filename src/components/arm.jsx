import React, { useState } from 'react';
import '../styles/muscles.css';
import { HiArrowSmRight } from 'react-icons/hi';
import arm from '../assets/arm.png';

const Arm = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    biceps: '',
    triceps: '',
    antebrazo: '',
  });
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storedUser = localStorage.getItem('authenticatedUser');
  
      // Verificar si hay un usuario almacenado en el localStorage
      if (!storedUser) {
        // Manejar el caso en el que no hay usuario autenticado
        console.error('No hay usuario autenticado');
        return;
      }
      
      // Parsear el usuario almacenado en el localStorage
      const parsedUser = JSON.parse(storedUser);
        
      const { biceps, triceps, antebrazo } = formData;
      const totalInputs = 3; // Número de campos en el formulario
      const averageWeight = (parseFloat(biceps) + parseFloat(triceps) + parseFloat(antebrazo)) / totalInputs;

      const response = await fetch('https://muscles.entranat.site/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userid: parsedUser.data.id,
          exercisesid: 5, // Cambia esto según el grupo muscular deseado
          weight: averageWeight,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormSuccess('Datos guardados con éxito.');
        setFormError(null);
      } else {
        setFormError(data.message || 'Error al procesar la solicitud.');
        setFormSuccess(null);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setFormError('Error al conectar con el servidor.');
      setFormSuccess(null);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center pb-5 bg-[#273a4c] ">
        <img className="w-24 h-24 mb-3 rounded-lm shadow-lg mt-5 " src={arm} onClick={handleDrawerToggle} alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-600 dark:text-white shadow-xl">Brazos</h5>
      </div>

      {/* Drawer component */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? '' : '-translate-x-full'
        } bg-white dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Ejercicios para brazos
        </h5>
        <button
          type="button"
          onClick={handleDrawerToggle}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              <label
                htmlFor="biceps"
                className="block mr-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                Bíceps
              </label>
              <input
                type="number"
                name="biceps"
                id="biceps"
                placeholder="10.00"
                value={formData.biceps}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white appearance-none"
                min="0"
                required
              />

              <label
                htmlFor="triceps"
                className="block mr-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                Tríceps
              </label>
              <input
                type="number"
                name="triceps"
                id="triceps"
                placeholder="10.00"
                value={formData.triceps}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white appearance-none"
                min="0"
                required
              />

              <label
                htmlFor="antebrazo"
                className="block mr-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
              >
                Antebrazo
              </label>
              <input
                type="number"
                name="antebrazo"
                id="antebrazo"
                placeholder="10.00"
                value={formData.antebrazo}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white appearance-none"
                min="0"
                required
              />

              {formError && <p className="text-red-500 text-sm">{formError}</p>}
              {formSuccess && <p className="text-green-500 text-sm">{formSuccess}</p>}
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Guardar marcas
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Arm;

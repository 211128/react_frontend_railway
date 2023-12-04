import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeleteAccount = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDeleteAccount = () => {

    const storedUser = localStorage.getItem('authenticatedUser');
  
    // Verificar si hay un usuario almacenado en el localStorage
    if (!storedUser) {
      // Manejar el caso en el que no hay usuario autenticado
      console.error('No hay usuario autenticado');
      return;
    }
    
    // Parsear el usuario almacenado en el localStorage
    const parsedUser = JSON.parse(storedUser);
       
    // Realizar la solicitud para eliminar la cuenta
    fetch('http://localhost:3006/api/v1/setinactive/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: parsedUser.data.id,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Lógica adicional después de la eliminación (por ejemplo, mostrar un mensaje de éxito)
        console.log('Cuenta eliminada con éxito:', data);
      })
      .catch(error => {
        console.error('Error al eliminar la cuenta:', error);
      });
  };

  const handleConfirmation = () => {
    // Aquí puedes agregar la lógica adicional antes de eliminar la cuenta
    handleDeleteAccount();
    // Cerrar el modal después de la confirmación
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Eliminar cuenta</button>

      {isModalOpen && (
        <div>
          <div>Estás seguro? Este paso no es reversible.</div>
          <button onClick={handleConfirmation}>
            <Link to="/">Confirmar</Link>
          </button>
          <button onClick={() => setModalOpen(false)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;

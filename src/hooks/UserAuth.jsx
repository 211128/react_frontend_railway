// useAuth.js

import { useState, useEffect } from 'react';

const useAuth = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    // Obtener el usuario almacenado en el localStorage
    const storedUser = localStorage.getItem('authenticatedUser');

    if (storedUser) {
      // Parsear el usuario almacenado si existe
      const parsedUser = JSON.parse(storedUser);
      setAuthenticatedUser(parsedUser);
    }
  }, []);

  return { authenticatedUser, setAuthenticatedUser };
};

export default useAuth;

// import React, { createContext } from 'react'

// export const loginContext = createContext();

// function loginProvider( children ) {

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
  
//     const loginVerify = (username, password, setError) => {
//         // Lógica de autenticación con respecto a la base de datos.
//         // Puedes realizar una llamada a la API o la lógica que necesites.
      
//         if (username === 'usuario' && password === 'contraseña') {
//           // Usuario autenticado correctamente
//           alert('Inicio de sesión exitoso');
//           setError('');
//         } else {
//           // Credenciales incorrectas
//           setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
//         }
//       };
      
      
      
      

//   return (
//     <>
    
//         <loginContext.Provider value={{
//             loginVerify
            
//         }}> 

//         {children}

//         </loginContext.Provider>
    
//     </>
//   )
// }

// export default login;
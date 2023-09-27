// context/MyProvider.tsx
import React, { useState } from 'react';
import MyContext from './MyContext';

interface MyContextData {
  email: string;
  setEmail: (email: string) => void; // Agrega esta función para establecer el email
  password: string;
  setPassword: (password: string) => void; // Agrega esta función para establecer el password
}

interface MyProviderProps {
  children: React.ReactNode;
}

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>(''); // Estado para almacenar el email
  const [password, setPassword] = useState<string>(''); // Estado para almacenar el password

  const contextData: MyContextData = {
    email,
    setEmail, // Asigna la función setName al contexto
    password,
    setPassword,
  };

  return <MyContext.Provider value={contextData}>{children}</MyContext.Provider>;
};

export default MyProvider;

// context/MyProvider.tsx
import React, { useState } from 'react';
import MyContext from './MyContext';

interface MyContextData {
  name: string;
  setName: (name: string) => void; // Agrega esta función para establecer el nombre
}

interface MyProviderProps {
  children: React.ReactNode;
}

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [name, setName] = useState<string>(''); // Estado para almacenar el nombre

  const contextData: MyContextData = {
    name,
    setName, // Asigna la función setName al contexto
  };

  return <MyContext.Provider value={contextData}>{children}</MyContext.Provider>;
};

export default MyProvider;

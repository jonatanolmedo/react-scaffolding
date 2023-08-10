// context/MyContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Define your context data type here
interface MyContextData {
  name: string;
  setName: (name: string) => void; // Agrega esta función para establecer el nombre
}

const MyContext = createContext<MyContextData | null>(null);

export const useMyContext = (): MyContextData => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export default MyContext;

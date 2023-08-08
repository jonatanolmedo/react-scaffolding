// useMyHook.ts
import { useState, useEffect } from 'react';

// Definimos un tipo para los datos de la API
interface UserData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}


const useMyHook = () => {
  const [data, setData] = useState<UserData[]>([]);

  const fetchData = async (): Promise<UserData[]> => {
    const response = await fetch('https://randomuser.me/api/');
    const result = await response.json();
    //console.log(result)
    return result.results;
  };

  const refreshData = () => {
    fetchData().then((result: UserData[]) => setData(result));
  };

  useEffect(() => {
    refreshData();
  }, []);

  return { data, refreshData }; // Retornamos también la función refreshData
};

export default useMyHook;
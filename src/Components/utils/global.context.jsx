import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const url = "https://jsonplaceholder.typicode.com/users";
  const [datosDentista, setDatosDentista] = useState([]);
  const [nombreDentista, setNombreDentista] = useState([]);
  const [nombreUsuarioDentista, setNombreUsuarioDentista] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setDatosDentista(response.data);
        console.log(response.data);
      } catch {
        (err) => err;
      }
    };
    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider value={{ datosDentista }}>
      {children}
    </ContextGlobal.Provider>
  );
};

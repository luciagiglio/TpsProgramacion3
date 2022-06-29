import { createContext, useContext, useEffect, useState } from "react";

//creamos un contexto que necesitamos para difinir cada estado y como va a estar integrado para manejarlo con los componentes
const AppContext = createContext({
  //items es nuestro estado
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

//este archivo nos permite manejar el estado de la aplicacion de forma global
//este componente va a funcionar como un contenedor
export default function Store({ children }) {
  //seguimos necesitando de usestate para modificar el estado
  const [items, setItems] = useState([]);

  function createItem(item) {
    const temp = [...items];
    temp.push(item);
    setItems([...temp]);
  }

  function getItem(id) {
    const item = items.find((item) => item.id === id);
    return item;
  }

  //
  function updateItem(item) {
    const index = items.findIndex((item) => item.id === item.id);
    const temp = [...items];
    temp[index] = { ...item };
  }

  //llamamos a nuestro contexto. todo lo que este dentro de provider va a tener acceso a los metodos de useContext
  //hacemos accesible a todos los componentes no solo el estado sino que tambien las funciones
  return (
    <AppContext.Provider
      value=
      {{
        items,
        createItem,
        getItem,
        updateItem,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

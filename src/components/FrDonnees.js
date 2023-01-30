import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

export const FrDonnees = (props) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem('todoStore'));
    if (todoStore) setTodos(todoStore);
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("todoStore", JSON.stringify(todos));
    });
  });

  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  );
};

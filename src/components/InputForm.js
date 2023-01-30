import React, {useState, useContext, useRef, useEffect} from 'react';
import {DataContext} from './FrDonnees';


export default function InputForm() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoNom, setTodoNom] = useState('');
  const todoInput = useRef();
  const addTodo = e =>{
    e.preventDefault();
    setTodos([...todos, {name: todoNom, complete: false}])
    setTodoNom('');
    todoInput.current.focus();
  }
  useEffect(()=>{
    todoInput.current.focus();
  },[])
  return (
    <form autoComplete="off" onSubmit={addTodo}>
        <input type="text" name="todos" id="todos" ref={todoInput} required placeholder="Quelle tâche doit être faite?" value={todoNom} onChange={e => setTodoNom(e.target.value.toLowerCase())}/>
        <button type="submit">Creer</button>
    </form>
  );
}

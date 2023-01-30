import React, { useContext, useState } from 'react';
import {DataContext} from './FrDonnees'

export default function Footer() {
  const [checkAll, setCheckAll]=useState(false)
  const [todos, setTodos]=useContext(DataContext)
  const adnCheckAll = ()=>{
    const newTodos = [...todos]
    newTodos.forEach(todo =>{
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }
  const newTodosComplete = ()=>{
    return todos.filter(todo =>todo.complete === false)
  }
  const supprimerTodo = () =>{
    setTodos(newTodosComplete)
    setCheckAll(false)
  }
  return (
    <>
    {
      todos.length === 0 ? <h2>Felicitations! Rien a faire!</h2> 
      : <div className="row">
            <label htmlFor="all">
              <input type="checkbox" name="all" id="all" onChange={adnCheckAll} checked={checkAll}/>
              Tout
            </label>
            <p>You Have {newTodosComplete().length} to do</p>
            <button id="supprimer" onClick={supprimerTodo}>Supprimer</button>
        </div>
    }
    </>
  );
}

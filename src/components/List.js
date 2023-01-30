import React,{useContext} from 'react';
import Elest from './Elest';
import {DataContext} from './FrDonnees';

export default function List() {
  const [todos,setTodos] = useContext(DataContext);
  const switchComplete = id => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index)=>{
      if (index === id){
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos)
  }
  const adnEditerTodos = (editerValeur,id)=>{
    const newTodos = [...todos]
    newTodos.forEach((todo,index)=>{
      if(index === id){
        todo.name = editerValeur
      }
    })
    setTodos(newTodos)
  }
  return (
    <ul>
      {
        todos.map((todo, index)=>(
          <Elest todo={todo} key={index} id={index} checkComplete={switchComplete} adnEditerTodos={adnEditerTodos}/>
        ))
      }
    </ul>
  );
}

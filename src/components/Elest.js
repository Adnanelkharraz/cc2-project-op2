import React, {useState} from 'react';

export default function Elest({todo, id, checkComplete, adnEditerTodos}) {
  const [onEditer, setOnEditer] = useState(false)
  const [editerValeur, setEditerValeur] = useState(todo.name)
  const adnEditer = () =>{
    setOnEditer(true)
  }
  const adnSauvgarder = id =>{
    setOnEditer(false)
    if(editerValeur){
      adnEditerTodos(editerValeur,id)
    }else{
      setEditerValeur(todo.name)
    }
  }
  if(onEditer){
    return (
      <li>
          <input type="text" id={editerValeur} value={editerValeur} name={editerValeur} onChange={e => setEditerValeur(e.target.value.toLowerCase())}/>
          <button onClick={()=>adnSauvgarder(id)}>Sauvgarder</button>
      </li>
    )
  }else{
    return (
      <li>
          <label htmlFor={id} className={todo.complete ? "active" : ""}>
            <input type="checkbox" id={id} checked={todo.complete} onChange={() => checkComplete(id)}/>
            {todo.name}
          </label>
          <button disabled={todo.complete} onClick={adnEditer}>Editer</button>
      </li>
    )
  }
}

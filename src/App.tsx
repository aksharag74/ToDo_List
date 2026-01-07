import { useState } from 'react'
import type { todo } from "./types"
import TodoInput from "./components/todoInput.tsx"
import TodoList from "./components/todoList.tsx"
import './App.css'

function App() {
  const [todos, setTodos] = useState<todo[]>([]);
  function addtodo(text: string){
    const NewTodo : todo={
      id: Date.now(),
      title:text,
      completed:false,
    };
    setTodos([...todos,NewTodo]);
  }
  function deletetodo(id:number){
    setTodos(todos.filter((t)=>t.id !== id)) 
  }
  function toggletodo(id:number){
    setTodos(
    todos.map((t)=>
      t.id===id ? {...t,completed:!t.completed}:t
    )
    )
  }
  
  return(
    <div className="Container">
      <h1>ToDo List</h1>
      <TodoInput onAdd={addtodo} />
      <TodoList 
      todos={todos}
      onDelete={deletetodo}
      onToggle={toggletodo}
      />
    </div>
  );
}

export default App

import type{ todo } from "../types";
import TodoItem from "./todoItem.tsx";

interface Props{
    todos:todo[];
    onToggle:(id:number)=>void
    onDelete:(id:number)=>void
}
function todoList({todos,onToggle,onDelete}:Props){
    if(todos.length==0) return <p>No Tasks Yet</p>

    return(
        <ul className="list">
            {todos.map((todo)=>(
                <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}/>
            ))
            }
        </ul>
    );
}
export default todoList
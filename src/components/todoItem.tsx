import type{todo} from "../types"

interface Props{
    todo:todo;
    onToggle:(id:number) => void;
    onDelete:(id:number) => void;
}
function TodoItem({todo,onToggle,onDelete}:Props){
    return(
        <li className="item">
            <span
            onClick={()=> onToggle(todo.id)}
            className={todo.completed?"done":""}
        >
            {todo.title}
        </span>
        <button onClick={()=>onDelete(todo.id)}>Delete</button>
        </li>
    );
}
export default TodoItem
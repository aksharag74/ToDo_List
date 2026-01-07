import type React from "react";
import { useState } from "react";

interface Props{
    onAdd: (text:string)=>void;
}

function TodoInput({onAdd}:Props){
    const[text, setText]=useState("")
    function handleSubmit(e:React.FormEvent){ 
        e.preventDefault();   
        if(!text.trim()) return;   
        onAdd(text);   
        setText("")    
    } 
 return(
    <form onSubmit={handleSubmit} className="input-row" >
        <input
        value={text}
        onChange={(e)=>setText(e.target.value)} 
        placeholder="Add you task..."
        />
        <button type="submit">Add to list</button>
    </form>
 );
}
export default TodoInput
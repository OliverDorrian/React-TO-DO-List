import React, {useState} from "react";
import ToDoForm from "./TodoForm";

function ToDoList(){
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos =  [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    }

    return (
        <div id="main-content">
            <ToDoForm onSubmit={addTodo}/>
        </div>
    )
}

export default ToDoList;
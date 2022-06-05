import React, {useState} from "react";
import ToDoForm from "./TodoForm";
import Todo from './Todo';

function ToDoList(){
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos =  [todo, ...todos];

        setTodos(newTodos);
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updateTodos);
    }

    return (
        <div id="main-content">
            <ToDoForm onSubmit={addTodo}/>
            <div id="list-of-to-do">
                <Todo todos={todos} completeTodo={completeTodo}/>

            </div>
        </div>
    )
}

export default ToDoList;
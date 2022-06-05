import React, {useState} from 'react';

function ToDoForm(props){
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
           id: Math.floor(Math.random() * 10000),
           text: input
        });

        setInput('');
    };


    return(
        <div>
            <form id="row-buttons" className="todo-form" onSubmit={handleSubmit}>
                <div id="row-buttons-left">
                    <input 
                            type="text" 
                            placeholder="Add-Item"
                            value={input} 
                            name="text"
                            class="search-box" 
                            id="search-box"
                            onChange={handleChange}
                        />
                </div>
                <div id="row-buttons-right">
                    <button className="todo-button" class="button" id="task-create">Add Item</button>
                </div>                    
            </form>            
        </div>           
    );       
}


export default ToDoForm;
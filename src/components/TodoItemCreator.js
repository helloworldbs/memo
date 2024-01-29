import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../TodoList';

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    
    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
        {
            id: getId(),
            text : inputValue,
            isComplete :false
        }
        ]
        
        )
    }

  return (
    <div>
      <h4>TO-DO LIST</h4>
      < input type='text' value={inputValue} onChange={handleChange} />
      < button onClick={addItem}>+</button> 
    </div>
  )
}


let id = 0;
function getId(){
    return id++;
}

export default TodoItemCreator

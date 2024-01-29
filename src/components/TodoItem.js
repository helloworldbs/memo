import React from 'react'
import { useRecoilState } from 'recoil';
import { todoListState } from '../TodoList';

const TodoItem = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);
    

    const editItem = ({ target : {value} }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item, 
            text: value
        })
        setTodoList(newList);
    }

    const toggleItemCmp = ({ target : {value} }) => {
      const newList = replaceItemAtIndex(todoList, index, {
          ...item, 
          isComplete: !item.isComplete,
      })
      setTodoList(newList);
  }

  const delItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList)
  }

  return (
    <div>
      < input type="text" value={item.text} onChange={editItem}/>
      < input type='checkbox' checked={item.isComplete} onClick={toggleItemCmp}/>
      < button onClick={delItem}>X</button>
    </div>
  )
}


export default TodoItem

function replaceItemAtIndex(arr,index,newValue){
    return [...arr.slice(0,index), newValue, ...arr.slice(index+1)]
}


function removeItemAtIndex(arr, index){
  return [...arr.slice(0,index),...arr.slice(index+1)]
}
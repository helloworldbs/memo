import React from 'react';
import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItemCreator from './components/TodoItemCreator';
import { todoListState } from './TodoList';
import TodoItem from './components/TodoItem';

function App() {
  const todoList = useRecoilValue(todoListState);
  console.log('todoList',todoList);

  return (
    <div className="App">
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;


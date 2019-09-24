import React, {useReducer}from 'react';

import {todoReducer, initialState, ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED} from "./todoReducer"

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css"

const App = () => {
  const [state,dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (event, todo) => {
    event.preventDefault()
    dispatch({type:ADD_TODO, payload: todo}) 
  }

  const toggleTodo = todoId => {
    dispatch({type: TOGGLE_TODO, payload: todoId})
  }

  const clearCompleted = event => {
    event.preventDefault()
    dispatch({type: CLEAR_COMPLETED})
  }

  return (
    <div className="App">
      <div className = "header">
        <h1>Karen's Reducer Todo</h1>
        <TodoForm addTodo = {addTodo}/>
      </div>
      <TodoList
          todos={state.todos}
          toggleTodo={toggleTodo}
          clearCompleted={clearCompleted}
      />
    </div>
  )
}



export default App;
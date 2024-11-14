import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoslice'

function Todo() {

  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  return (
    <div>
    {
      todos.map(todo => (
        <li key={todo.id}>
          {todo.title}
          <button className='ml-5' onClick={() => dispatch(removeTodo(todo.id))}> X </button>
        </li>
      ))
    }
  </div>
  )
}


export default Todo;
import { useState } from "react"
import './App.css'
import AddTodo from "./Components/AddTodo.jsx"
import Todo from "./Components/Todo.jsx"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <AddTodo/>
    <Todo/>
    </>
  )
}

export default App

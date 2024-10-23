import { useState, useEffect } from "react";
import { TodoProvider } from "./Contexts";
import { TodoForm } from "./Components";
import {TodoItem} from "./Components";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (todo, id) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? todo : t)));
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t)=> (t.id!==id)))
  };

  const toggleChecked = (id) => {
    setTodos((prev)=> prev.map((t)=> (t.id===id ? {...t, checked: !t.checked} : t)))
  };


  useEffect(() => {
    const todoFromLocalstorage = JSON.parse(localStorage.getItem("todos"));
    if (todoFromLocalstorage && todoFromLocalstorage.length) {
      setTodos(todoFromLocalstorage);
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleChecked }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todo</h1>
          <div className="mb-4">

    <TodoForm />

          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* <TodoItem  /> */}
            {
              todos.map((todo) => 
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>)
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
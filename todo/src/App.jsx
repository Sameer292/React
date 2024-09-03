import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-4xl pt-4 text-center "> Todo </h1>
      <div className="flex items-center justify-center h-20  ">
        <input
          type="text"
          placeholder="Todos.."
          className="h-10 p-3 rounded-lg text-black"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button
          onClick={addTodo}
          className="ml-3 flex items-center bg-green-700 h-10 p-3 rounded-lg hover:scale-105 active:scale-95 duration-150"
        >
          Add ToDO
        </button>
      </div>
      <hr className=" w-full min-[1050px]:w-1/4" />
      <ul className=" flex flex-col items-center w-full  justify-center ">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li
              key={index}
              className="p-3 flex border-2 border-white items-center ease-in-out duration-100 justify-between rounded-lg mt-5 w-full min-[1050px]:w-1/4"
            >
              <p className="w-4/5 truncate">{todo}</p>
              <button
                onClick={() => removeTodo(index)}
                className="bg-red-800 rounded-lg p-2 ml-3 w-24 hover:scale-105 active:scale-95 duration-100"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <h3 className="mt-5">No Todos</h3>
        )}
      </ul>
    </div>
  );
}

export default App;

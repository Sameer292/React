import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoslice.js';


function AddTodo() {
    const [todo, settodo] = React.useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(todo))
        settodo('')
    }

    return (
        <form onSubmit={addTodoHandler} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border-2 border-slate-800 rounded-md px-3 outline-none duration-150 text-slate-800 bg-white py-1.5"
                value={todo} onChange={(e) => settodo(e.target.value)}
            />
            <button type="submit" className="rounded-lg px-5 ml-3 py-1 outline-none border-slate-800 border-2 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default AddTodo;
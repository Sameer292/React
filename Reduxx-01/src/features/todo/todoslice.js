import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState ={
    todos : [
        {
            id: nanoid(),
            title: 'Learn React',
            completed: false
        }
    ]
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo ={
                id:nanoid(), title: action.payload, completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) =>{
            state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
        }
    }
})



export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer

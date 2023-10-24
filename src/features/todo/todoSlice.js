import { createSlice, nanoid } from "@reduxjs/toolkit";
const setInitialState = () => {
  let todoi = JSON.parse(localStorage.getItem("todos"));
  return todoi;
};
const initialState = {
  todos: setInitialState() || [],
};

//initialState = state
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //we can give function reference here
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        complete: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((Prevtodo) =>
        Prevtodo.id === action.payload.id ? action.payload : Prevtodo
      );
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((prevTodo) =>
        prevTodo.id === action.payload
          ? { ...prevTodo, complete: !prevTodo.complete }
          : prevTodo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleComplete } =
  todoSlice.actions;
export default todoSlice.reducer;

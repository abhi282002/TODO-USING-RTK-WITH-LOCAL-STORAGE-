import TodoForm from "./Components/TodoForm";
import { Provider } from "react-redux";
import todoSlice from "./features/todo/todoSlice";
import { store } from "./app/store";
import TodoItem from "./Components/TodoItem";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
function App() {
  let local = useSelector((store) => store.todo.todos);
  console.log("local:", local);
  localStorage.setItem("todos", JSON.stringify(local));
  // useEffect(() => {
  //   // let todos = JSON.parse(localStorage.getItem("todos"));

  //   setTate(local);
  //   console.log(tate);
  // }, []);

  // useEffect(() => {
  //   console.log(todos);
  //   localStorage.setItem("todos", JSON.stringify(local));
  // }, [todos]);

  return (
    <div className="bg-[#242424] w-screen h-screen flex flex-col items-center">
      <div className="pt-[30px] w-full pb-6">
        <TodoForm />
      </div>
      {local.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;

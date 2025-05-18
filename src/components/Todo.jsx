import { useEffect, useState } from "react";
import Actions from "./Actions";

function Todo() {
  const [todos, setTodos] = useState([]);
  const FetchData = async () => {
    const response = await fetch("http://localhost:3000/Todos");
    const data = await response.json();
    setTodos(data);
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div>
      {todos.map((todo, index) => (
        <div className="">
          <div className="widget-content-left">
            <h5 key={index} className="widget-heading">
              {todo.title}
            </h5>
          </div>
          <div className="widget-content-right">
            <Actions />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;

import { useEffect, useState } from "react";
import Actions from "./Actions";

function Todo() {
  const [todos, setTodos] = useState([]);
  //read
  const FetchData = async () => {
    const response = await fetch("http://localhost:3000/Todos");
    const data = await response.json();
    setTodos(data);
  };
  //Delete
  const DeleteTodo = async (id) => {
    const response = await fetch(`http://localhost:3000/Todos/${id}`, {
      method: "delete",
    });
    const data = await response.json();
    FetchData();
    console.log(data);
  };
  //create -- Add

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div className="widget-content-left">
            <h5 className="widget-heading">
              {todo.id} - {todo.title}
            </h5>
          </div>
          <div className="widget-content-right">
            {/* <Actions deleteTodo={DeleteTodo} id={todo.id} /> */}
            <button className="border-0 btn-transition btn btn-outline-success">
              <i className="fa fa-pen"></i>
            </button>
            <button
              onClick={() => DeleteTodo(todo.id)}
              className="border-0 btn-transition btn btn-outline-danger"
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function SingleTodo() {
  const params = useParams();

  const [todo, setTodo] = useState();
  const getTodoById = async () => {
    const id = params.id;
    const response = await fetch(`http://localhost:3000/Todos/${id}`);
    const data = await response.json();
    setTodo(data);
  };

  useEffect(() => {
    getTodoById();
  });

  return (
    <div>
      SingleTodo {params?.id} -- {todo?.title}{" "}
    </div>
  );
}

export default SingleTodo;

function Actions({ deleteTodo, id }) {
  return (
    <div>
      <button className="border-0 btn-transition btn btn-outline-success">
        <i className="fa fa-pen"></i>
      </button>
      <button
        onClick={() => deleteTodo(id)}
        className="border-0 btn-transition btn btn-outline-danger"
      >
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
}

export default Actions;

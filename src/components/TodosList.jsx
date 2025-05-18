import { Link } from "react-router";
import Todo from "../components/Todo";
function TodosList() {
  return (
    <div>
      <Link to={"/"}> HomePage </Link>

      <div className="container mt-5">
        <div className="row d-flex justify-content-center container">
          <div className="col-md-8">
            <div className="card-hover-shadow-2x mb-3 card">
              <div className="card-header-tab card-header">
                <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                  <i className="fa fa-tasks"></i>&nbsp;Task Lists
                </div>
              </div>
              <div className="scroll-area-sm">
                <perfect-scrollbar className="ps-show-limits">
                  <div
                    style={{
                      position: "static",
                    }}
                    className="ps ps--active-y"
                  >
                    <div className="ps-content">
                      <ul className=" list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="todo-indicator bg-warning"></div>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-2">
                                <div className="custom-checkbox custom-control">
                                  <label
                                    className="custom-control-label"
                                    htmlFor="exampleCustomCheckbox12"
                                  >
                                    &nbsp;
                                  </label>
                                </div>
                              </div>
                              <Todo></Todo>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </perfect-scrollbar>
              </div>
              <div className="d-block text-right card-footer">
                <button className="btn btn-primary">Add Task</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodosList;

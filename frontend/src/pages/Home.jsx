/* eslint-disable react-hooks/rules-of-hooks */
import Todo from "../components/Todo";
import api from "../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const response = await api.get("/api/todos/");
      setTodos(response.data);
    } catch (error) {
      alert("error fetching todos" + error);
    }
  };

  const createTodo = async (e) => {
    setLoading(true);
    e.preventDefault();

    const due_date = "2024-09-09";
    try {
      const response = await api.post("/api/todos/", { task: todo, due_date });
      if (response.status === 201) {
        alert("New task added.");
        getTodos();
      }
    } catch (error) {
      alert("Failed to add new task.");
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await api.delete(`/api/todos/delete/${id}`);
      if (response.status === 204) {
        alert("Task Deleted.");
        getTodos();
      }
    } catch (error) {
      alert("error deleting task " + error);
    }
  };

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <div className="row g-2">
                  <div className="col">
                    <h4>Hello, John Paul Geralla!</h4>
                  </div>
                  <div className="col-auto">
                    <Link to="/logout">
                      <button className="btn btn-outline-primary">
                        Logout
                        <i className="bi bi-box-arrow-right custom-icon"></i>
                      </button>
                    </Link>
                  </div>
                </div>
                <br />
                <form className="row g-2">
                  <div className="col">
                    <input
                      type="text"
                      value={todo}
                      className="form-control add-task"
                      placeholder="New Task..."
                      onChange={(e) => setTodo(e.target.value)}
                    />
                  </div>

                  <div className="col">
                    <button
                      disabled={loading ? true : false}
                      type="submit"
                      className="btn btn-success mb-3"
                      onClick={createTodo}
                    >
                      Add Todo
                    </button>
                  </div>
                </form>
                <ul className="nav nav-pills todo-nav">
                  <li role="presentation" className="nav-item all-task active">
                    <a href="#" className="nav-link">
                      All
                    </a>
                  </li>
                  <li role="presentation" className="nav-item active-task">
                    <a href="#" className="nav-link">
                      Active
                    </a>
                  </li>
                  <li role="presentation" className="nav-item completed-task">
                    <a href="#" className="nav-link">
                      Completed
                    </a>
                  </li>
                </ul>
                <div className="todo-list">
                  {todos.map((todo) => {
                    return (
                      <Todo todo={todo} key={todo.id} onDelete={deleteTodo} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;

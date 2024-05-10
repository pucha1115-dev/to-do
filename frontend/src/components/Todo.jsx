/* eslint-disable react/prop-types */
const Todo = ({ todo, onDelete }) => {

  

  return (
    <>
      <div className="todo-item">
        <div className="checker">
          <input className="task-checkbox" type="checkbox" />
        </div>
        <span className="task">{todo.task}</span>
        <button className="btn" onClick={() => onDelete(todo.id)}> <i className="bi bi-trash-fill delete-icon"></i></button>
      </div>
    </>
  );
};

export default Todo;

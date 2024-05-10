/* eslint-disable react/prop-types */
import due_date_image from "../assets/due-date.png";
const Todo = ({ todo, onDelete }) => {
  const formatDate = (dateString) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };
  return (
    <>
      <div className="todo-item">
        <div className="checker">
          <input className="task-checkbox" type="checkbox" />
        </div>
        <span className="task">{todo.task}</span>
        <img className="due-date-image" src={due_date_image} alt="due date" />
        <span className="due-date">{formatDate(todo.due_date)}</span>
        <button className="btn" onClick={() => onDelete(todo.id)}>
          {" "}
          <i className="bi bi-trash-fill delete-icon"></i>
        </button>
      </div>
    </>
  );
};

export default Todo;

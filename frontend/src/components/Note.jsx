/* eslint-disable react/prop-types */
const Note = ({ note }) => {
  return (
    <>
      <div className="todo-item">
        <div className="checker">
          <input className="task-checkbox" type="checkbox" />
        </div>
        <span className="task">{note.title}</span>
        <i className="bi bi-trash-fill delete-icon"></i>
      </div>
    </>
  );
};

export default Note;

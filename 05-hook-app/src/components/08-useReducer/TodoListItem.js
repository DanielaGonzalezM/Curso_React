import React from "react";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li className="list-group-item" key={todo.id}>
      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done && "complete"}`}
      >
        {index + 1}. {todo.desc}
      </p>
      <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

TodoListItem.defaultProps = {
  todos: [],
  handleDelete: () => {},
  handleToggle: () => {},
  index: 0,
};

export default TodoListItem;

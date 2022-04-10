import React from "react";
import { useForms } from "../../hooks/useForms";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForms({
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;

    const newToDo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newToDo);
    reset();
  };
  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Aprender ..."
          autoComplete="off"
          className="form-control"
          onChange={handleInputChange}
          value={description}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;

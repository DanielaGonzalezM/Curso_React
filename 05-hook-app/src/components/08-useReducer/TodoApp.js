import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import { useForms } from "../../hooks/useForms";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender React",
    done: false,
  },
];

const init = () => {
  
  return JSON.parse(localStorage.getItem('todos')) || [];

};
const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  console.log(todos);

  const [{ description }, handleInputChange, reset] = useForms({
    description: "",
  });

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))

  },[todos]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;
    const newToDo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newToDo,
    };

    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todos, i) => (
              <li className="list-group-item" key={todos.id}>
                <p className="text-center">
                  {i + 1}. {todos.desc}
                </p>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
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
        </div>
      </div>
    </div>
  );
};

export default TodoApp;

const initialState = [
  {
    id: 1,
    toDso: "Comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    return [...state, action.payload];
  }

  return state;
};

let toDos = todoReducer();

const newToDo = {
  id: 2,
  toDso: "Comprar jamón",
  done: false,
};

const action = {
  type: "agregar",
  payload: newToDo,
};

toDos = todoReducer(toDos, action);
console.log(toDos);

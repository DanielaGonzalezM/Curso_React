import React, { useMemo, useState } from "react";
import "../02-useEffect/effects.css";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

const MemoHook = () => {
  const { cont, increment } = useCounter(5000);
  const [show, setShow] = useState(true);


  const memoProcesoPesado = useMemo(() => procesoPesado(cont), [cont]);
  return (
    <div>
      <h1>MemoHook</h1>
      <h1>
        Counter:
        <small>value={cont} </small>
      </h1>
      <hr />
      <p>{memoProcesoPesado}</p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;

import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

const Layout = () => {
  const { cont, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${cont}`
  );
  const { quote } = !!data && data[0];
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());

    return () => {};
  }, [quote]);
  return (
    <div>
      <h1>LayoutEffect Quites</h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p ref={pTag} className="mb-2">
          {" "}
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize) }</pre>
      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};

export default Layout;

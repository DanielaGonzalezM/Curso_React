import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";
const MultipleCustomHook = () => {
    
   const {cont,increment}=useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${cont}`
  );
  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1>BreakingBad Quites</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-2"> {quote}</p>
          <footer className="blockquote-footer"> {author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={increment}>
          Siguiente quote
      </button>
    </div>
  );
};

export default MultipleCustomHook;

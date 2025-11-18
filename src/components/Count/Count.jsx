import { useState } from "react";

function Count({ btnText, onConfirm }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const confirm = () => {
    if (count > 0) {
      onConfirm(count);
    }
  };

  return (
    <div className="count-container">
      <div className="count-buttons">
        <button
          className="btn"
          onClick={decrement}
          type="button"
          disabled={count === 0}
        >
          -
        </button>
        <span>{count}</span>
        <button className="btn" onClick={increment} type="button">
          +
        </button>

        <button
          className="btn btn-add"
          onClick={confirm}
          type="button"
          disabled={count === 0}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Count;

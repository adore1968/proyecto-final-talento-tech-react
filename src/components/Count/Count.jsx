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
    <div className="mt-3">
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-outline-light btn-lg"
          onClick={decrement}
          type="button"
          disabled={count === 0}
        >
          -
        </button>
        <span className="fs-4 fw-bold">{count}</span>
        <button
          className="btn btn-outline-light btn-lg"
          onClick={increment}
          type="button"
        >
          +
        </button>

        <button
          className="btn btn-primary btn-lg mt-3 w-100"
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

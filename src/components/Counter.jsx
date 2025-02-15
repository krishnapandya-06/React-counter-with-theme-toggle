import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";
import { useMemo, useCallback } from "react";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const squaredCount = useMemo(() => count * count, [count]);

  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);
  const handleDecrement = useCallback(() => dispatch(decrement()), [dispatch]);

  return (
    <div className="card">
      <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>Counter: {count}</h2>
      <h3 style={{ fontSize: "18px", color: "gray" }}>Squared: {squaredCount}</h3>
      <div>
        <button className="btn-primary" onClick={handleIncrement}>+</button>
        <button className="btn-danger" onClick={handleDecrement}>-</button>
        <button className="btn-secondary" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

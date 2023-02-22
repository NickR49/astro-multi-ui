import { useStore } from "@nanostores/react";
import { counter } from "../../counterStore";

const Counter = () => {
  const $counter = useStore(counter);
  console.log(`React rendering`);
  return (
    <div className="border-4 rounded-md">
      <span>React JS:</span>
      <button onClick={() => counter.set($counter + 1)}>+</button>
      <span>{$counter}</span>
      <button onClick={() => counter.set($counter - 1)}>-</button>
    </div>
  );
};

export default Counter;

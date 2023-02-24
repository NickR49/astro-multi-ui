import { useStore } from "@nanostores/react";
import { counter } from "../../counterStore";
import Button from "../solid/Button";

const Counter = () => {
  const $counter = useStore(counter);
  console.log(`React rendering`);
  return (
    <div className="border-4 rounded-md">
      <button onClick={() => counter.set($counter + 1)}>+</button>
      {/* <Button label="-" onClick={() => counter.set($counter - 1)} /> */}
      <span>{$counter}</span>
      <button onClick={() => counter.set($counter - 1)}>-</button>
    </div>
  );
};

export default Counter;

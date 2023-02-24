import { useStore } from "@nanostores/react";
import { counter } from "../../counterStore";
import Button from "./Button";

const Counter = () => {
  const $counter = useStore(counter);
  console.log(`React rendering`);
  return (
    <div className="flex flex-row gap-6">
      <Button label="-" onClick={() => counter.set($counter - 1)} />
      <span>{$counter}</span>
      <Button label="+" onClick={() => counter.set($counter + 1)} />
    </div>
  );
};

export default Counter;

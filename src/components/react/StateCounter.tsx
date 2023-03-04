import { useStore } from "@nanostores/react";
import { counter } from "../../counterStore";
import Button from "./Button";

const StateCounter = () => {
  const $counter = useStore(counter);
  return (
    <div className="flex flex-row gap-6 items-center">
      <Button label="-" onClick={() => counter.set($counter - 1)} />
      <div className="w-12 text-center">{$counter}</div>
      <Button label="+" onClick={() => counter.set($counter + 1)} />
    </div>
  );
};

export default StateCounter;

import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-row gap-6 items-center">
      <Button label="-" onClick={() => setCount(count - 1)} />
      <div className="w-12 text-center">{count}</div>
      <Button label="+" onClick={() => setCount(count + 1)} />
    </div>
  );
};

export default Counter;

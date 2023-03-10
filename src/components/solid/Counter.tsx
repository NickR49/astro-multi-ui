/** @jsxImportSource solid-js */
import { createSignal } from "solid-js";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <div class="flex flex-row gap-6 align-center items-center">
      <Button label="-" onClick={() => setCount(count() - 1)} />
      <div class="w-12 text-center">{count()}</div>
      <Button label="+" onClick={() => setCount(count() + 1)} />
    </div>
  );
}

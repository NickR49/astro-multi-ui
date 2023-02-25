/** @jsxImportSource solid-js */
import { createSignal } from "solid-js";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  console.log(`Solid rendering`);
  return (
    <div class="flex flex-row gap-6">
      <Button label="-" onClick={() => setCount(count() - 1)} />
      <div class="w-12 text-center">{count()}</div>
      <Button label="+" onClick={() => setCount(count() + 1)} />
    </div>
  );
}

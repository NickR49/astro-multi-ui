/** @jsxImportSource solid-js */
import { useStore } from "@nanostores/solid";
import { counter } from "../../counterStore";
import Button from "./Button";

export default function Counter() {
  const $counter = useStore(counter);
  console.log(`Solid rendering`);
  return (
    <div class="flex flex-row gap-6">
      <Button label="-" onClick={() => counter.set($counter() - 1)} />
      <div class="w-12 text-center">{$counter()}</div>
      <Button label="+" onClick={() => counter.set($counter() + 1)} />
    </div>
  );
}

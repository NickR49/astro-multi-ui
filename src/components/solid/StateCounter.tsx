/** @jsxImportSource solid-js */
import { useStore } from "@nanostores/solid";
import { counter } from "../../counterStore";
import Button from "./Button";

export default function StateCounter() {
  const $counter = useStore(counter);
  return (
    <div class="flex flex-row gap-6 items-center">
      <Button label="-" onClick={() => counter.set($counter() - 1)} />
      <div class="w-12 text-center">{$counter()}</div>
      <Button label="+" onClick={() => counter.set($counter() + 1)} />
    </div>
  );
}

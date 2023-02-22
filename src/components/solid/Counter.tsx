/** @jsxImportSource solid-js */
import { useStore } from "@nanostores/solid";
import { counter } from "../../counterStore";

export default function Counter() {
  const $counter = useStore(counter);
  console.log(`Solid rendering`);
  return (
    <div class="md:flex bg-slate-300 rounded-xl p-8 m-8 md:p-0">
      <p class="text-lg font-medium">Solid JS</p>
      <button class="rounded-full" onClick={() => counter.set($counter() + 1)}>
        +
      </button>
      <div class="text-slate-700 dark:text-slate-500">{$counter()}</div>
      <span></span>
      <button class="rounded-full" onClick={() => counter.set($counter() - 1)}>
        -
      </button>
    </div>
  );
}

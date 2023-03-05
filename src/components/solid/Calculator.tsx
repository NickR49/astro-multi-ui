/** @jsxImportSource solid-js */
import { createSignal } from "solid-js";
import CalcButton from "./CalcButton";

export default function Calculator() {
  const [value, setValue] = createSignal("");

  function handleClick(char: string) {
    setValue(value() + char);
  }
  function handleEval() {
    setValue(eval(value()).toString());
  }

  return (
    <div class="ml-10">
      <div class="flex flex-row gap-2 items-center">
        <div class="rounded-sm border-2 border-slate-600 bg-slate-200 h-12 w-36 p-2 m-2">
          <span class="text-right text-lg text-slate-700">{value()}</span>
        </div>
        <CalcButton char="AC" onClick={() => setValue("")} />
      </div>

      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(4, 60px)",
          "grid-template-rows": "repeat(4, 60px)",
        }}
      >
        <CalcButton char="1" onClick={() => handleClick("1")} />
        <CalcButton char="2" onClick={() => handleClick("2")} />
        <CalcButton char="3" onClick={() => handleClick("3")} />
        <CalcButton char="/" onClick={() => handleClick("/")} />
        <CalcButton char="4" onClick={() => handleClick("4")} />
        <CalcButton char="5" onClick={() => handleClick("5")} />
        <CalcButton char="6" onClick={() => handleClick("6")} />
        <CalcButton char="*" onClick={() => handleClick("*")} />
        <CalcButton char="7" onClick={() => handleClick("7")} />
        <CalcButton char="8" onClick={() => handleClick("8")} />
        <CalcButton char="9" onClick={() => handleClick("9")} />
        <CalcButton char="-" onClick={() => handleClick("-")} />
        <CalcButton char="0" onClick={() => handleClick("0")} />
        <CalcButton char="." onClick={() => handleClick(".")} />
        <CalcButton char="=" onClick={handleEval} />
        <CalcButton char="+" onClick={() => handleClick("+")} />
      </div>
    </div>
  );
}

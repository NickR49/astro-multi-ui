/** @jsxImportSource solid-js */
interface Props {
  char: string;
  onClick: () => void;
}

export default function CalcButton(props: Props) {
  const { char, onClick } = props;
  return (
    <button
      onClick={onClick}
      class="border-2 border-violet-800 rounded-md bg-violet-300 w-12 h-12"
    >
      <h1>{char}</h1>
    </button>
  );
}

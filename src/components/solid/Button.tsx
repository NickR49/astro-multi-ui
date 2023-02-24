/** @jsxImportSource solid-js */

interface Props {
  label: string;
  onClick: () => void;
}

export default function Button(props: Props) {
  const { label, onClick } = props;
  return (
    <button class="rounded-full bg-white w-8" onClick={onClick}>
      {label}
    </button>
  );
}

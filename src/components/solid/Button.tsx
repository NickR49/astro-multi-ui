/** @jsxImportSource solid-js */

interface Props {
  label: string;
  onClick: () => void;
}

export default function Button(props: Props) {
  const { label, onClick } = props;
  return (
    <button class="btn-xs bg-white rounded-full w-8 border border-slate-600" onClick={onClick}>
      {label}
    </button>
  );
}

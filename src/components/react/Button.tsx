interface Props {
  label: string;
  onClick: () => void;
}

export default function Button(props: Props) {
  const { label, onClick } = props;
  return (
    <button className="btn-xs rounded-full bg-white w-8 border border-slate-600" onClick={onClick}>
      {label}
    </button>
  );
}

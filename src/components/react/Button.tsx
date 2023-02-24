interface Props {
  label: string;
  onClick: () => void;
}

export default function Button(props: Props) {
  const { label, onClick } = props;
  return (
    <button className="rounded-full bg-white w-8" onClick={onClick}>
      {label}
    </button>
  );
}

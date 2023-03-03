interface Props {
  children: any;
}

export default function Button(props: Props) {
  const { children } = props;
  return (
    <div className="flex flex-col bg-blue-300 rounded-md border-gray-800 border-2 shadow-gray-500 shadow-lg p-2 m-1">
      <h2>Solid</h2>
      <div>{children}</div>
    </div>
  );
}

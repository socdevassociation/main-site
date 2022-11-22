export default function TwoCol({ children, label }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">{label}</h2>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

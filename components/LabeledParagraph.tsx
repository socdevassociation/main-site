export default function LabeledParagraph({ children, label }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{label}</h2>
      <p className="text-xl leading-loose">{children}</p>
    </div>
  );
}

export default function FormInput({ label, type, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label}>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

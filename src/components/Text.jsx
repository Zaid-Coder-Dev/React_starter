export default function Text({ label, name, value, onChange, required = false, type = "text" }) {
  return (
    <div className="champ">
      <label htmlFor={name}>
        {label}
        {required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
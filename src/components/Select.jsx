export default function Select({ label, name, value, onChange, options, required = false }) {
  return (
    <div className="champ">
      <label htmlFor={name}>
        {label}
        {required && " *"}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">-- Choisir --</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
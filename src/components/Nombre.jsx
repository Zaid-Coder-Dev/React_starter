export default function Nombre({
  label, name, value, onChange, required = false,
  maxLength, pattern, title, placeholder,
}) {
  return (
    <div className="champ">
      <label htmlFor={name}>
        {label}
        {required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type="tel"
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        pattern={pattern}
        title={title}
        placeholder={placeholder}
      />
    </div>
  );
}
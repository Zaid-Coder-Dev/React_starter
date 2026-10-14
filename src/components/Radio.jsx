export default function Radio({ label, name, value, onChange, options, required = false }) {
  return (
    <fieldset>
      <legend>
        {label}
        {required && " *"}
      </legend>

      {options.map((opt) => (
        <label key={opt}>
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={onChange}
            required={required}
          />
          {opt}
        </label>
      ))}
    </fieldset>
  );
}
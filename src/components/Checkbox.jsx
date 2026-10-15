
export default function Checkbox(props) {
  return (
    <label>
      <input
        type="checkbox"
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
        required={props.required}
      />
      {props.label}
      {props.required && " *"}
    </label>
  );
}
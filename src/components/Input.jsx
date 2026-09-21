export default function Input({ label, name, type = "text", required, ...rest }) {
  return (
    <div className="field">
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} name={name} type={type} required={required} {...rest} />
    </div>
  );
}
export default function Select({ label, name, options = [], required, ...rest }) {
  return (
    <div className="field">
      {label && <label htmlFor={name}>{label}</label>}
      <select id={name} name={name} required={required} {...rest}>
        <option value="">— Select —</option>
        {options.map((opt) => (
          <option key={opt.value ?? opt} value={opt.value ?? opt}>
            {opt.label ?? opt}
          </option>
        ))}
      </select>
    </div>
  );
}
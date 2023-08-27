export const Input = ({ className, type, textLabel, changeHandler, value }) => {
  return (
    <p>
      <label htmlFor={className}>{textLabel}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => changeHandler(className, event.target.value)}
        id={className}
      />
    </p>
  );
};

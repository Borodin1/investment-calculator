export const Button = ({ type, className, onClickHandler, children }) => {
  return (
    <button onClick={onClickHandler} type={type} className={className}>
      {children}
    </button>
  );
};

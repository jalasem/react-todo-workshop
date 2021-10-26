const Button = (props: any) => {
  return (
    <button
      className={`py-1 px-4 mx-2 rounded bg-blue-500 ${props.className}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;

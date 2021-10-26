import "./Button.scss";

const Button = (props: any) => {
  return (
    <button className="Button" {...props}>
      {props.children}
    </button>
  );
};

export default Button;

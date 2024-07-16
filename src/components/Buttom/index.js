// Button.jsx
import styles from "./Button.module.css";

const Button = ({ onClick, children, className }) => {
  return (
    <button className={`${styles[className]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

import styles from "./Button.module.css";

const Button = (props) => {
  const { variants } = props;

  return (
    <button className={`${styles.button} ${variants === "secondary" ? styles.secondary : styles.primary}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

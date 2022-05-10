import styles from "./Button.module.css";

const Button = (props) => {
  //variant 변이?
  const { variants } = props;

  //삼항 연산자
  //...(스프레드 연산자)
 
  return (
    <button className={`${styles.button} ${variants === "secondary" ? styles.secondary : styles.primary}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

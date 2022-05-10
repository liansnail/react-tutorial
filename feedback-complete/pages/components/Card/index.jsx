import styles from "./Card.module.css";

const Card = (props) => {
  const { children } = props;
  console.log(styles)
  return <div className={styles.card}>{children}</div>;
};

export default Card;

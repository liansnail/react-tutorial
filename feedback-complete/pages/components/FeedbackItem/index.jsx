import Card from "../Card";
import styles from "./FeedbackItem.module.css";

const FeedbackItem = (props) => {
  const { item } = props;
  console.log('item', item)
  //TODO
  const handleDelete = (id) => {};

  return (
    <Card>
      <div className={styles.numDisplay}>{item.rating}</div>
      <button className={styles.close} onClick={() => handleDelete(item.id)}>
        X
      </button>
      <p className="text-display">{item.text}</p>
    </Card>
  );
};

export default FeedbackItem;

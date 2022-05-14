import Card from "../Card";
import styles from "./FeedbackItem.module.css";
import feedbackApi from "../../api/feedbackApi";
import { motion } from "framer-motion";

const FeedbackItem = (props) => {
  const { item, setFeedbacks } = props;

  const handleDelete = async (id) => {
    try {
      await feedbackApi.deleteFeedback(id);
      const { data: feedbacks } = await feedbackApi.getFeedbacks();

      setFeedbacks(feedbacks);
    } catch (err) {
      alert("서버에 문제가 발생했습니다.");
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, scale: [1, 1.1, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <div className={styles.numDisplay}>{item.rating}</div>
        <button className={styles.close} onClick={() => handleDelete(item.id)}>
          X
        </button>
        <p className="text-display">{item.text}</p>
      </Card>
    </motion.div>
  );
};

export default FeedbackItem;

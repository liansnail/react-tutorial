import { useState } from "react";
import Card from "../Card";
import styles from "./FeedbackForm.module.css";
import Button from "../Button";
import RatingSelect from "../RatingSelect";
// import axios from "axios";
import feedbackApi from "../../api/feedbackApi";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { addFeedback, getFeedbacks } from "../../redux/feedback";

const FeedbackForm = ({ setFeedbacks }) => {
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(10);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        addFeedback({
          id: uuidv4(),
          rating: selected,
          text: text,
        })
      );
      //필드 초기화
      setText("");
      setSelected(10);
      // 응답값의 data만 구조 분해 할당으로 feedbacks이름으로 할당
      await dispatch(getFeedbacks());

      // global state 가 업데이트 되므로 아래 줄은 필요없어짐
      // setFeedbacks(feedbacks);
    } catch (err) {
      alert("서버에 문제가 발생했습니다.");
      console.error(err);
    }
  };

  const handleSelect = (rating) => {
    setSelected(rating);
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <header>
        <h2>서비스의 피드백을 남겨주세요</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <RatingSelect
          selected={selected}
          setSelected={setSelected}
          onRatingSelect={handleSelect}
        />
        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.input}
            onChange={handleInput}
            value={text}
            placeholder="Tell us something that keeps you coming back"
          />
          <Button disabled={text.length === 0} type="submit">
            보내기
          </Button>
        </div>
        {message ? <div className={styles.message}>{message}</div> : null}
      </form>
    </Card>
  );
};

export default FeedbackForm;

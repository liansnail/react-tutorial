import { useState } from "react";
import Card from "../Card";
import styles from "./FeedbackForm.module.css";
import Button from "../Button";
import RatingSelect from "../RatingSelect";
import axios from "axios";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);

  // TODO POST 데이터 등록
  const handleSubmit = (e) => {};

  const handleSelect = (rating) => {};

  const handleInput = (e) => {};

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
          <Button disabled={btnDisabled} type="submit">
            보내기
          </Button>
        </div>
        {message ? <div className={styles.message}>{message}</div> : null}
      </form>
    </Card>
  );
};

export default FeedbackForm;

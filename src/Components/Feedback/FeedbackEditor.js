import React from "react";
import styles from "./Feedback.module.scss";
import PropTypes from "prop-types";

const FeedbackEditor = ({ onClickGood, onClickNeutral, onClickBad }) => (
  <div>
    <button type="button" onClick={onClickGood} className={styles.btn}>
      Good
    </button>

    <button type="button" onClick={onClickNeutral} className={styles.btn}>
      Neutral
    </button>

    <button type="button" onClick={onClickBad} className={styles.btn}>
      Bad
    </button>
  </div>
);

export default FeedbackEditor;

FeedbackEditor.propTypes = {
  onClickGood: PropTypes.func,
  onClickNeutral: PropTypes.func,
  onClickBad: PropTypes.func,
};

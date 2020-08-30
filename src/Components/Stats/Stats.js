import React from "react";
import PropTypes from "prop-types";
import styles from "./Stats.module.scss";

const Stats = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <title className={styles.title}>Statistics</title>

      <ul className={styles.list}>
        <li className={styles.item}>Good: {good}</li>
        <li className={styles.item}>Neutral: {neutral} </li>
        <li className={styles.item}>Bad: {bad} </li>
        <li className={styles.item}>Total: {total} </li>
        <li className={styles.item}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

export default Stats;

Stats.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
};

Stats.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
};

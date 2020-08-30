import React from "react";
import PropTypes from "prop-types";
import styles from "../Stats/Stats.module.scss";

const Notification = ({ notif }) => {
  return <p className={styles.notification}>{notif}</p>;
};

export default Notification;

Notification.propTypes = {
  title: PropTypes.string,
};

Notification.defaultProps = {
  message: "No feedback",
};

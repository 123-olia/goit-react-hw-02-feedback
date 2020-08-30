import React from "react";
import styles from "./Section.module.scss";

const Section = ({ children, title }) => {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;

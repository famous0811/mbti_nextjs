import React from "react";
import styles from "style/examineItem.scss";

interface ExamItem {
  title: string;
  activation: boolean;
  click?: string;
}
const examItem = ({ title, activation, click }: ExamItem) => {
  return (
    <div
      className={[
        activation ? styles.activtion : styles.disabled,
        styles.examitem,
      ].join(" ")}
    >
      <div className={styles.question}>
        <span>{title}</span>
      </div>

      <div className={styles.decision}>
        <div className={styles.agreed}>동의</div>
        <div className={styles.options}>
          <div
            className={[
              styles.max,
              styles.agree,
              click === "agree-max" ? styles.click : "",
            ].join(" ")}
          />
          <div
            className={[
              styles.med,
              styles.agree,
              click === "agree-med" ? styles.click : "",
            ].join(" ")}
          />
          <div
            className={[
              styles.min,
              styles.agree,
              click === "agree-min" ? styles.click : "",
            ].join(" ")}
          />
          <div
            className={[
              styles.neutral,
              click === "neutral" ? styles.click : "",
            ].join(" ")}
          />
          <div
            className={[
              styles.min,
              styles.disagree,
              click === "disagree-min" ? styles.click : "",
            ].join(" ")}
          />
          <div
            className={[
              styles.med,
              styles.disagree,
              click === "disagree-med" ? styles.click : "",
            ].join(" ")}
          />
          <div
            className={[
              styles.max,
              styles.disagree,
              click === "disagree-max" ? styles.click : "",
            ].join(" ")}
          />
        </div>
        <div className={styles.disagreed}>비동의</div>
      </div>
    </div>
  );
};

export default examItem;

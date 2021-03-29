import React from "react";
import Layout from "components/Layout";
import styles from "style/examine.scss";

const examine = () => {
  return (
    <Layout>
      <div>
        <div>
          <h1>무료 성격 유형검사</h1>
          <div>NERIS Type Explorer®</div>
        </div>
        <div className={styles.tips}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.examtable}></div>
      </div>
    </Layout>
  );
};

export default examine;

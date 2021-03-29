import Link from "next/link";
import Layout from "components/Layout";
import styles from "style/welcome.scss";

const IndexPage = () => (
  <Layout>
    <div className={styles.welcome}>
      <div className={styles.hero}>
        <div className={styles.textarea}>
          <h1>
            16Personalities 검사가 너무 정확해 "살짝 소름이 돋을 정도예요"라고
            성격 유형 검사를 마친 한 참여자는 말했습니다.
          </h1>
          <p>
            쉽고 간단하면서도 정확한 성격 유형 검사를 통해 당신이 누구이며, 왜
            그러한 특정 행동 성향을 보이는지 확인하십시오.
          </p>
        </div>
        <button className={styles.start}>검사 실시</button>
      </div>
      <div className={styles.screen}>
        <img src="static/welcome.svg" alt="" width="100%" height="100%" />
        <svg viewBox="0 0 1920 476" preserveAspectRatio="none">
          <polygon
            points="1920 476 1810 403 1158 259 578 391 420 303 219 442 0 476 0 0 1920 0 1920 476"
            className="c1"
          ></polygon>
        </svg>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

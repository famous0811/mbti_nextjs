import React, { useState } from "react";
import Layout from "components/Layout";
import ExamItem from "components/examItem";
import styles from "style/examine.scss";

const examine = () => {
  const [testText, settestText] = useState(
    "다른 사람들에게 자신을 소개하는 것을 어려워 합니다."
  );
  return (
    <Layout>
      <div>
        <div className={styles.header}>
          <h1>무료 성격 유형검사</h1>
          <div>NERIS Type Explorer®</div>
          <div className={styles.shape}></div>
        </div>
        <div className={styles.tips}>
          <div className={styles.topbox}>
            <div className={styles.test}></div>
            <div className={styles.test}></div>
            <div className={styles.test}></div>
          </div>
          <div className={styles.tip}>
            <img
              src="static/test-header-1.svg"
              alt=""
              width="100%"
              height="100%"
            />
            <div>총 검사 시간은 12분 내외입니다.</div>
          </div>
          <div className={styles.tip}>
            <img
              src="static/test-header-2.svg"
              alt=""
              width="100%"
              height="100%"
            />
            <div>혹 질문이 마음에 들지 않더라도 정직하게 답변하십시오.</div>
          </div>
          <div className={styles.tip}>
            <img
              src="static/test-header-3.svg"
              alt=""
              width="100%"
              height="100%"
            />
            <div>가능하면 답변 시 '중립'을 선택하지 마십시오.</div>
          </div>
          <div className={styles.shadow}></div>
        </div>
        <div className={styles.examtable}>
          <ExamItem title={testText} activation={true} />
          <ExamItem
            title="종종 주변을 무시하거나 잊어버리는 생각에 빠지곤 합니다."
            activation={false}
          />
          <ExamItem
            title="이메일에 가능한 빨리 회신하려고 하고 지저분한 편지함을 참을 수 없습니다."
            activation={false}
          />
          <ExamItem
            title="중암갑을 받을 때에도 쉽게 침착하게 집중력을 유지할 수 있습니다."
            activation={false}
          />
          <div className={styles.teststst}>
            <button
              onClick={() => {
                settestText("fdsalfkndasifl");
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default examine;

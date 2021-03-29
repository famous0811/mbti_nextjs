import React from "react";
import Layout from "components/Layout";
import styles from "style/Contact.scss";
const Contact = () => {
  return (
    <Layout>
      <div className={styles.tell}>
        <h1>연락처</h1>
        <p>
          궁금하신 사항이나 문의사항이 있으시면 망설임 없이 연락주시기 바랍니다.
          저희는 저희 앞으로 발송되는 모든 문의 사항들을 하나하나 꼼꼼히
          확인합니다. 당신의 소중한 의견 기다리고 있겠습니다. 현재 영어로 작석됭
          이메일에 한해서만 답변이 가능합니다. 이 점 많은 양해 부탁드립니다.
        </p>
        <div>support@16personalities.com</div>
        <div className={styles.other}>
          <h4>NERIS Analytics Limited</h4>
          <div>Nine Hills Road, Cambridge, CB2 1GE, United Kingdom</div>
          <div>Registered in England and Wales, #8646330</div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

import React from "react";
import styles from "style/header.scss";
import Link from "next/link";
const header = () => {
  return (
    <header>
      <a href="/" className={styles.logo}>
        <img src="/static/logo.svg" alt="" width="100%" height="100%" />
      </a>

      <nav className={styles.menu}>
        <ul>
          <li className={styles.item}>
            <Link href="/">성격 유형 검사</Link>
          </li>
          <li className={styles.item}>
            <Link href="/">성격 유형</Link>
          </li>
          <li className={styles.item}>
            <Link href="/">연락처</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.language}>
        <Link href="/">한국어</Link>
      </div>
    </header>
  );
};

export default header;

import React from "react";
import styles from "style/footer.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div>©2011-2021 NERIS Analytics Limited</div>
      <div className={styles.footermenu}>
        <Link href="/">Contact</Link>
        <Link href="/">Terms&Coditions</Link>
        <Link href="/">PrivacyPolicy</Link>
      </div>
      <p className={styles.translation}>
        <b>Disclaimer:</b>
        All non-English versions of the website contain unofficial translations
        contributed by our users. They are not binding in any way, are not
        guaranteed to be accurate, and have no legal effect. The official text
        is the
        <a href="/" className={styles.other}>
          English version
        </a>
        of the website. Please consider reporting inaccuracies to
        <a href="/" className={styles.other}>
          support@16personalities.com
        </a>
        or join our
        <a href="/" className={styles.other}>
          translation project!
        </a>
      </p>
    </footer>
  );
};

export default Footer;

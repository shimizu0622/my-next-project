// app/_components/Footer/Footer.tsx
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>© 2024 マイポートフォリオ. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
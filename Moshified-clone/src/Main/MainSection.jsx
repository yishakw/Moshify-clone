import styles from "./MainSection.module.css";

export default function MainSection() {
  return (
    <div className={styles.main_section}>
      <div className={styles.left}>
        <h1>Cloud Hosting for Pros</h1>
        <p>Deploy your websites in less than 60 seconds.</p>
        <button>GET STARTED</button>
      </div>
      <img src="https://www.moshified.com/banner.001ba340.webp" alt="banner" />
    </div>
  );
}

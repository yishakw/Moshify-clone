import styles from "./MainSection.module.css";

export default function MainSection() {
  return (
    <div className={styles.main_section}>
      <>
        <h1>Cloud Hosting for Pros</h1>
        <p>Deploy your websites in less than 60 seconds.</p>
        <button>GET STARTED</button>
      </>
      <img src="https://www.moshified.com/banner.001ba340.webp" alt="banner" />
      {/* <div className={styles["grid--"]}>
        <div className={`${styles["grid"]} ${styles["grid--1"]}`}>box-1</div>
        <div className={`${styles["grid"]} ${styles["grid--2"]}`}>box-2</div>
        <div className={`${styles["grid"]} ${styles["grid--3"]}`}>box-3</div>
        <div className={`${styles["grid"]} ${styles["grid--4"]}`}>box-4</div>
        <div className={`${styles["grid"]} ${styles["grid--5"]}`}>box-5</div>
        <div className={`${styles["grid"]} ${styles["grid--6"]}`}>box-6</div>
      </div> */}
    </div>
  );
}

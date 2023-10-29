import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img
        src="https://www.moshified.com/logo.762e26a3.svg"
        alt="moshified logo"
      />
    </div>
  );
}
export default Logo;

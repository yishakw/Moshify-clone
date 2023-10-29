import Logo from "./Logo";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles["nav_bar"]}>
      <Logo />
      <ul>
        <li>Hosting</li>
        <li>VPS</li>
        <li>Domain</li>
        <li>Pricing</li>
      </ul>
    </div>
  );
}

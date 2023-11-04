import Logo from "./Logo";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles["nav_bar"]}>
      <Logo />
      <ul>
        <li>
          <a>Hosting</a>
        </li>
        <li>
          <a>VPS</a>
        </li>
        <li>Domain</li>
        <li>Pricing</li>
      </ul>
    </div>
  );
}

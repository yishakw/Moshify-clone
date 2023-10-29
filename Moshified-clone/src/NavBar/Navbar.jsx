import { useState } from "react";
import Logo from "./Logo";
import styles from "./Navbar.module.css";
export default function Navbar() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={styles["nav_bar"]}>
      <Logo />
      <ul style={{ color: hovered ? "white" : "wheat", cursor: "pointer" }}>
        <li
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          Hosting
        </li>
        <li>VPS</li>
        <li>Domain</li>
        <li>Pricing</li>
      </ul>
    </div>
  );
}

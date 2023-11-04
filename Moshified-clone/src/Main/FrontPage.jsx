import MainSection from "./MainSection";
import Navbar from "../NavBar/Navbar";
import styles from "./FrontPage.module.css";
function FrontPage() {
  return (
    <div className={styles.front_page}>
      <Navbar />
      <MainSection />
    </div>
  );
}

export default FrontPage;

import styles from "./SectionOne.module.css";

export default function SectionOne() {
  return (
    <section className={styles.section_one}>
      <header>Starting at $10 per month</header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        exercitationem?
      </p>
      <div className={styles.inputs}>
        <input placeholder="Enter domain name here..." />
        <button className={styles.button}>search</button>
      </div>
      <ul className={styles.ul}>
        <li>
          <span className={styles.li_com}>.com $9</span>
        </li>
        <li>.sg $10</li>
        <li>.space $11</li>
        <li>.info $14</li>
        <li>.net $10</li>
        <li>.xyz $10</li>
      </ul>
    </section>
  );
}

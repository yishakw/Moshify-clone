import styles from "./SectionOne.module.css";

export default function SectionOne() {
  return (
    <section className={styles.section_one}>
      <header>Starting at $10 per month</header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        exercitationem?
      </p>
      <div>
        <input placeholder="Enter domain name here..." />
        <button>search</button>
      </div>
      <ul>
        <li>
          <span>.com $9</span>
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

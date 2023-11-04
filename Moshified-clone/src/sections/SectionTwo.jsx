import styles from "./SectionTwo.module.css";

export default function SectionTwo() {
  return (
    <div className={styles.section_two}>
      <Card
        header={"Entry"}
        price={14}
        duration={"month"}
        discount={10}
        bgColor="#00d9ff"
        popular={false}
      />
      <Card
        header={"Entry"}
        price={14}
        duration={"month"}
        discount={10}
        popular={true}
        bgColor="#2584ff"
      />
      <Card
        header={"Entry"}
        price={14}
        duration={"month"}
        discount={10}
        popular={false}
        bgColor="#00d9ff"
      />
    </div>
  );
}

const Card = (props) => {
  return (
    <div>
      <header>{props.header}</header>
      <span>{props.price}</span>
      <span>/{props.duration}</span>
      <span>{props.discount}%OFF</span>
      <span>Easy start on the cloud</span>
      <ul>
        <li>Unlimited Websites</li>
        <li>Unlimited Bandwidth</li>
        <li>100 GB SSD Sotrage</li>
        <li>3 GB RAM</li>
      </ul>
      <button>BUY NOW</button>
    </div>
  );
};

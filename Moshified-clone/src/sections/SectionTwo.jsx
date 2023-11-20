import styles from "./SectionTwo.module.css";
import PropTypes from "prop-types";
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

const Card = ({ header, price, duration, discount }) => {
  Card.propTypes = {
    header: PropTypes.string,
    price: PropTypes.number,
    duration: PropTypes.number,
    discount: PropTypes.number,
  };
  return (
    <div className={styles.card}>
      <div className={styles.heading}>
        <header>{header}</header>
        <span className={styles.price}>${price}</span>
        <span className={styles.duration}>/{duration}</span>
        <span className={styles.discount}>{discount}%OFF</span>
        <span>Easy start on the cloud</span>
      </div>
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

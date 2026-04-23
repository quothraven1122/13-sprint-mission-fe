import { icSearch } from "../../assets/icons";
import styles from "./Input.module.css";

export default function Input({ placeholder, value, onChange, ...props }) {
  return (
    <div {...props} className={styles.container}>
      <img src={icSearch} />
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

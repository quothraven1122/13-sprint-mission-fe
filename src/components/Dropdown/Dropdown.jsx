import React from "react";
import { useDropdown } from "@/hooks";
import { icArrowDown } from "../../assets/icons";
import styles from "./Dropdown.module.css";

export default function Dropdown({ menu, value, onChange }) {
  const [open, toggle] = useDropdown();
  return (
    <div className={styles.container}>
      <div className={styles.currentContainer} onClick={toggle}>
        <div className={styles.current}>
          <p>{value}</p>
          <img src={icArrowDown} className={styles.icon} />
        </div>
      </div>

      <div className={`${styles.dropdown} ${!open && styles.dropdownClose}`}>
        {menu.map((m) => (
          <div
            key={m.id}
            className={styles.menu}
            onClick={(e) => {
              onChange(m.name);
              toggle();
            }}
          >
            {m.name}
          </div>
        ))}
      </div>
    </div>
  );
}

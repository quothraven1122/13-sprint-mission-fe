import { useMediaQuery } from "react-responsive";
import { useDropdown } from "@/hooks";
import { icArrowDown, icSort } from "../../assets/icons";
import styles from "./Dropdown.module.css";

export default function Dropdown({ menu, value, onChange }) {
  const isMobile = useMediaQuery({ maxWidth: 720 });
  const { open, closeDropdown, toggleDropdown } = useDropdown();
  return (
    <div className={styles.container}>
      <div className={styles.currentContainer} onClick={toggleDropdown}>
        <div className={styles.current}>
          {!isMobile ? (
            <>
              <p>{value.name}</p>
              <img src={icArrowDown} className={styles.icon} />
            </>
          ) : (
            <>
              <img src={icSort} className={styles.icon} />
            </>
          )}
        </div>
      </div>

      <div
        onMouseLeave={closeDropdown}
        className={`${styles.dropdown} ${!open && styles.dropdownClose}`}
      >
        {menu.map((m) => (
          <div
            key={m.id}
            className={styles.menu}
            onClick={(e) => {
              onChange(m);
              closeDropdown();
            }}
          >
            {m.name}
          </div>
        ))}
      </div>
    </div>
  );
}

import { Button } from "@/components";
import styles from "./Pagination.module.css";

const PAGINATION_LENGTH = 5;

export default function Pagination({ currentPage, totalPages, onChange }) {
  const numbers = Array.from(
    { length: PAGINATION_LENGTH },
    (_, i) => i + (totalPages - PAGINATION_LENGTH + 1),
  );
  return (
    <div className={styles.pagination}>
      <Button
        variant="circle"
        onClick={() => {
          if (numbers[0] !== currentPage) onChange((prev) => prev - 1);
        }}
      >
        <div className={styles.btnTxt}>
          <p>{"<"}</p>
        </div>
      </Button>
      {numbers.map((n, i) => (
        <Button
          variant={n === currentPage ? "circle-selected" : "circle"}
          onClick={() => {
            onChange(n);
          }}
          key={i}
        >
          <div className={styles.btnTxt}>
            <p>{n}</p>
          </div>
        </Button>
      ))}
      <Button
        variant="circle"
        onClick={() => {
          if (numbers[PAGINATION_LENGTH - 1] !== currentPage)
            onChange((prev) => prev + 1);
        }}
      >
        <div className={styles.btnTxt}>
          <p>{">"}</p>
        </div>
      </Button>
    </div>
  );
}

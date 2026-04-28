import React from "react";
import styles from "./Header.module.css";
import { Button } from "@/components";
import { smLogo } from "@/assets/img";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.containerLeft}>
        <a>
          <div className={styles.logo}>
            <img src={smLogo} className={styles.logoImg} />
            판다마켓
          </div>
        </a>
        <nav className={styles.nav}>
          <a>
            <div className={styles.navBtn}>자유게시판</div>
          </a>
          <a>
            <div className={styles.navBtn}>중고마켓</div>
          </a>
        </nav>
      </div>
      <a>
        <Button variant={"rectangle"}>로그인</Button>
      </a>
    </header>
  );
}

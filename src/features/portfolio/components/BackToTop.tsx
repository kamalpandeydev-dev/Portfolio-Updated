"use client";

import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { useEffect, useState } from "react";
import styles from "./PortfolioPage.module.scss";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={`${styles.backToTop} ${visible ? styles.backToTopVisible : ""}`}
      href="#top"
      aria-label="Back to top"
    >
      <ArrowUpwardRoundedIcon fontSize="small" aria-hidden="true" />
    </a>
  );
}

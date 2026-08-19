"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems, profile } from "../portfolio-data";
import styles from "./PortfolioPage.module.scss";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <nav className={styles.navInner} aria-label="Main navigation">
        <a className={styles.brand} href="#top" aria-label="Kamal Pandey home" onClick={closeMenu}>
          <Image src={profile.logoPath} width={38} height={38} alt="" aria-hidden="true" />
          <span>
            <strong>{profile.name}</strong>
            <small>Scrum Master & UX Leader</small>
          </span>
        </a>

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <a className={styles.resumeLink} href={profile.resumePath} download>
            <DownloadRoundedIcon fontSize="small" aria-hidden="true" />
            Resume
          </a>
          <button
            className={styles.menuButton}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseRoundedIcon aria-hidden="true" /> : <MenuRoundedIcon aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div id="mobile-navigation" className={styles.mobileMenu}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} onClick={closeMenu}>
            Start a Conversation
          </a>
        </div>
      ) : null}
    </header>
  );
}

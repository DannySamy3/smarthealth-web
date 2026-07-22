"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, HeartPulse } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsDrawerOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <a href="/#hero" className={styles.logo} onClick={(e) => handleLinkClick(e, "hero")}>
            <div className={styles.logoIcon}>
              <img src="/images/logo.png" alt="Smart Health Logo" className={styles.logoImg} />
            </div>
            <span>Smart <em>Health</em></span>
          </a>

          <nav className={styles.nav}>
            <a href="/#ecosystem-demo" className={styles.navLink} onClick={(e) => handleLinkClick(e, "ecosystem-demo")}>
              Showcase
            </a>
            <a href="/#ecosystem" className={styles.navLink} onClick={(e) => handleLinkClick(e, "ecosystem")}>
              Modules
            </a>
            <a href="/#why-us" className={styles.navLink} onClick={(e) => handleLinkClick(e, "why-us")}>
              Why Us
            </a>
            <a href="/#about" className={styles.navLink} onClick={(e) => handleLinkClick(e, "about")}>
              About Us
            </a>
            <a href="/#pricing" className={styles.navLink} onClick={(e) => handleLinkClick(e, "pricing")}>
              Pricing
            </a>
            <a href="/#faq" className={styles.navLink} onClick={(e) => handleLinkClick(e, "faq")}>
              FAQ
            </a>
          </nav>

          <div className={styles.actions}>
            <a href="/#pricing" className="btn btn-secondary btn-sm" onClick={(e) => handleLinkClick(e, "pricing")}>
              Plans
            </a>
            <a href="/#ecosystem-demo" className="btn btn-primary btn-sm" onClick={(e) => handleLinkClick(e, "ecosystem-demo")}>
              Get Started
            </a>
          </div>

          <button className={styles.menuBtn} onClick={toggleDrawer} aria-label="Toggle navigation menu" id="mobile-menu-toggle">
            {isDrawerOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isDrawerOpen ? styles.drawerOpen : ""}`} id="mobile-navigation-drawer">
        <div className={styles.drawerHeader}>
          <a href="/#hero" className={styles.logo} onClick={(e) => handleLinkClick(e, "hero")}>
            <div className={styles.logoIcon}>
              <img src="/images/logo.png" alt="Smart Health Logo" className={styles.logoImg} />
            </div>
            <span>Smart <em>Health</em></span>
          </a>
          <button className={styles.menuBtn} onClick={toggleDrawer} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          <a href="/#ecosystem-demo" className={styles.drawerLink} onClick={(e) => handleLinkClick(e, "ecosystem-demo")}>
            Showcase
          </a>
          <a href="/#ecosystem" className={styles.drawerLink} onClick={(e) => handleLinkClick(e, "ecosystem")}>
            Modules
          </a>
          <a href="/#why-us" className={styles.drawerLink} onClick={(e) => handleLinkClick(e, "why-us")}>
            Why Us
          </a>
          <a href="/#about" className={styles.drawerLink} onClick={(e) => handleLinkClick(e, "about")}>
            About Us
          </a>
          <a href="/#pricing" className={styles.drawerLink} onClick={(e) => handleLinkClick(e, "pricing")}>
            Pricing
          </a>
          <a href="/#faq" className={styles.drawerLink} onClick={(e) => handleLinkClick(e, "faq")}>
            FAQ
          </a>
        </nav>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "auto" }}>
          <a href="/#pricing" className="btn btn-secondary" onClick={(e) => handleLinkClick(e, "pricing")}>
            Plans
          </a>
          <a href="/#ecosystem-demo" className="btn btn-primary" onClick={(e) => handleLinkClick(e, "ecosystem-demo")}>
            Get Started
          </a>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isDrawerOpen ? styles.overlayVisible : ""}`}
        onClick={toggleDrawer}
        id="drawer-overlay-backdrop"
      />
    </>
  );
}

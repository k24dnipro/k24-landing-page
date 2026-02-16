"use client";

import {
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationItem } from '@/types';
import styles from './Header.module.scss';

const navigationItems: NavigationItem[] = [
  { id: "home", label: "Головна", href: "#home" },
  { id: "about", label: "Про нас", href: "#about" },
  { id: "services", label: "Послуги", href: "#services" },
  { id: "gallery", label: "Галерея", href: "#gallery" },
  { id: "reviews", label: "Відгуки", href: "#reviews" },
  { id: "contact", label: "Контакти", href: "#contact" },
  { id: "parts", label: "Запчастини", href: "https://k24.parts" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state
      setIsScrolled(currentScrollY > 50);

      // Update visibility based on scroll direction
      if (currentScrollY < 10) {
        // Always show header at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleSectionChange = () => {
      const sections = navigationItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionChange);
    };
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith("#")) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${!isVisible ? styles.hidden : ""
        }`}
    >
      <div className={styles.container}>
        <Link href="/" onClick={() => handleNavClick("#home")}>
          <Image
            src="/logo.png"
            alt="K24"
            width={50}
            height={50}
            sizes="50px"
            className={styles.logoImage}
          />
        </Link>

        <nav className={styles.nav}>
          {navigationItems.map((item) =>
            item.href.startsWith("http") ? (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ""
                  }`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className={styles.contactInfo}>
          <Link
            href="#contact"
            className={styles.ctaButton}
            onClick={() => handleNavClick("#contact")}
          >
            Записатися
          </Link>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""
              }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Mobile menu: render in body so fixed positioning is relative to viewport (header has transform) */}
        {isMounted &&
          createPortal(
            <>
              <div
                className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ""
                  }`}
                onClick={toggleMobileMenu}
                aria-hidden={!isMobileMenuOpen}
              />
              <div
                className={`${styles.mobileMenuPanel} ${isMobileMenuOpen ? styles.open : ""
                  }`}
                aria-modal="true"
                aria-label="Меню"
              >
                <div className={styles.mobileMenuHeader}>
                  <Link
                    href="/"
                    className={styles.mobileMenuLogo}
                    onClick={() => handleNavClick("#home")}
                  >
                    <Image
                      src="/logo.png"
                      alt="K24"
                      width={44}
                      height={44}
                      sizes="44px"
                      className={styles.mobileMenuLogoImage}
                    />

                  </Link>
                  <button
                    type="button"
                    className={styles.mobileMenuClose}
                    onClick={toggleMobileMenu}
                    aria-label="Закрити меню"
                  >
                    <span aria-hidden>×</span>
                  </button>
                </div>

                <nav className={styles.mobileMenuNav}>
                  <ul className={styles.mobileNavList}>
                    {navigationItems.map((item, index) => (
                      <li
                        key={item.id}
                        className={styles.mobileNavItem}
                        style={
                          isMobileMenuOpen
                            ? { animationDelay: `${60 + index * 40}ms` }
                            : undefined
                        }
                      >
                        {item.href.startsWith("http") ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ""
                              }`}
                            onClick={() => handleNavClick(item.href)}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                <p className={styles.mobileMenuDescription}>
                  Професійне відновлення геометрії кузова та рихтування елементів
                  будь-якої складності. Гарантія якості, сучасне обладнання та
                  кваліфіковані майстри.
                </p>

                <div className={styles.mobileMenuActions}>
                  <Link
                    href="#contact"
                    className={styles.mobileMenuCtaPrimary}
                    onClick={() => handleNavClick("#contact")}
                  >
                    Записатися на ремонт
                  </Link>
                  <Link
                    href="#services"
                    className={styles.mobileMenuCtaSecondary}
                    onClick={() => handleNavClick("#services")}
                  >
                    Наші послуги
                  </Link>
                </div>
              </div>
            </>,
            document.body
          )}
      </div>
    </header>
  );
}

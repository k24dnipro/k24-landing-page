"use client";

import {
  useEffect,
  useState,
} from 'react';
import {
  ChevronUp,
  Instagram,
  MapPin,
  Music2,
  Phone,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.grid}>
            {/* Brand Column */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/logo.png"
                  alt="K24"
                  width={100}
                  height={100}
                  sizes="100px"
                  className={styles.logoImage}
                />
              </Link>

              <p className={styles.brandDescription}>
                Професійний автосервіс повного циклу у Дніпрі. Ми надаємо якісні
                послуги з ремонту та обслуговування автомобілів будь-якої
                складності вже понад 12 років.
              </p>
            </div>

            {/* Contact Column */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Контакти</h3>

              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <div className={styles.contactText}>
                  <a href="tel:+380987774401">+38 (098) 777-44-01</a>
                  <a href="tel:+380979590505">+38 (097) 959-05-05</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <div className={styles.contactText}>
                  вул. Нижньодніпровська, Дніпро, 49000
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com/k24.dnipro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <Instagram />
            </a>

            <a
              href="https://www.tiktok.com/@k24.dnipro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="TikTok"
            >
              <Music2 />
            </a>
          </div>
          <div className={styles.copyright}>
            © {currentYear} СТО К24 Dnipro. Всі права захищені.
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className={`${styles.backToTop} ${showBackToTop ? styles.visible : ""}`}
        onClick={scrollToTop}
        aria-label="Повернутися до верху"
      >
        <ChevronUp />
      </button>
    </footer>
  );
}

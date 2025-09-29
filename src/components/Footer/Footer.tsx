'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
                <div className={styles.logoIcon}>K24</div>
                <span className={styles.logoText}>К24 DNIPRO</span>
              </Link>
              
              <p className={styles.brandDescription}>
                Професійний автосервіс повного циклу у Дніпрі. Ми надаємо якісні послуги 
                з ремонту та обслуговування автомобілів будь-якої складності вже понад 15 років.
              </p>

              <div className={styles.socialLinks}>
                <a 
                  href="https://instagram.com/k24dnipro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.174-1.559l3.521-2.663c.666-.504 1.621-.379 2.124.287c.504.666.379 1.621-.287 2.124L8.449 16.988z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://facebook.com/k24dnipro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Facebook"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://t.me/k24dnipro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Telegram"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://wa.me/380671234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="WhatsApp"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Послуги</h3>
              <ul className={styles.linkList}>
                <li><a href="#services" className={styles.footerLink} onClick={() => handleNavClick('#services')}>Ремонт двигуна</a></li>
                <li><a href="#services" className={styles.footerLink} onClick={() => handleNavClick('#services')}>Ремонт трансмісії</a></li>
                <li><a href="#services" className={styles.footerLink} onClick={() => handleNavClick('#services')}>Гальмівна система</a></li>
                <li><a href="#services" className={styles.footerLink} onClick={() => handleNavClick('#services')}>Підвіска та рульове</a></li>
                <li><a href="#services" className={styles.footerLink} onClick={() => handleNavClick('#services')}>Електрообладнання</a></li>
                <li><a href="#services" className={styles.footerLink} onClick={() => handleNavClick('#services')}>Термінова допомога</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Компанія</h3>
              <ul className={styles.linkList}>
                <li><a href="#about" className={styles.footerLink} onClick={() => handleNavClick('#about')}>Про нас</a></li>
                <li><a href="#gallery" className={styles.footerLink} onClick={() => handleNavClick('#gallery')}>Галерея робіт</a></li>
                <li><a href="#reviews" className={styles.footerLink} onClick={() => handleNavClick('#reviews')}>Відгуки клієнтів</a></li>
                <li><a href="#contact" className={styles.footerLink} onClick={() => handleNavClick('#contact')}>Контакти</a></li>
                <li><Link href="/privacy" className={styles.footerLink}>Політика конфіденційності</Link></li>
                <li><Link href="/terms" className={styles.footerLink}>Умови обслуговування</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Контакти</h3>
              
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className={styles.contactText}>
                  <a href="tel:+380671234567">+38 (067) 123-45-67</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div className={styles.contactText}>
                  <a href="mailto:info@k24dnipro.com">info@k24dnipro.com</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div className={styles.contactText}>
                  вул. Автомобільна, 24<br />Дніпро, 49000
                </div>
              </div>

              <div className={styles.workingHours}>
                <div className={styles.hoursTitle}>Режим роботи</div>
                <div className={styles.hoursItem}>Пн-Пт: 08:00 - 20:00</div>
                <div className={styles.hoursItem}>Сб-Нд: 09:00 - 18:00</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © {currentYear} СТО К24 Dnipro. Всі права захищені.
          </div>
          
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>Конфіденційність</Link>
            <Link href="/terms" className={styles.bottomLink}>Умови</Link>
            <Link href="/sitemap" className={styles.bottomLink}>Карта сайту</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className={`${styles.backToTop} ${showBackToTop ? styles.visible : ''}`}
        onClick={scrollToTop}
        aria-label="Повернутися до верху"
      >
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </footer>
  );
}


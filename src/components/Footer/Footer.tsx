'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin, ChevronUp } from 'lucide-react';
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
                  <Instagram />
                </a>
                
                <a 
                  href="https://facebook.com/k24dnipro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
                
                <a 
                  href="https://t.me/k24dnipro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Telegram"
                >
                  <MessageCircle />
                </a>
                
                <a 
                  href="https://wa.me/380671234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="WhatsApp"
                >
                  <MessageCircle />
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
                <Phone className={styles.contactIcon} />
                <div className={styles.contactText}>
                  <a href="tel:+380671234567">+38 (067) 123-45-67</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <div className={styles.contactText}>
                  <a href="mailto:info@k24dnipro.com">info@k24dnipro.com</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
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
        <ChevronUp />
      </button>
    </footer>
  );
}


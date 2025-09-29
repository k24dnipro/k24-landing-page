'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { NavigationItem } from '@/types';

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Головна', href: '#home' },
  { id: 'about', label: 'Про нас', href: '#about' },
  { id: 'services', label: 'Послуги', href: '#services' },
  { id: 'gallery', label: 'Галерея', href: '#gallery' },
  { id: 'reviews', label: 'Відгуки', href: '#reviews' },
  { id: 'contact', label: 'Контакти', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
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

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={() => handleNavClick('#home')}>
          <div className={styles.logoIcon}>K24</div>
          <span>К24 DNIPRO</span>
        </Link>

        <nav className={styles.nav}>
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.contactInfo}>
          <a href="tel:+380671234567" className={styles.phone}>
            <svg className={styles.phoneIcon} fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +38 (067) 123-45-67
          </a>
          
          <Link href="#contact" className={styles.ctaButton} onClick={() => handleNavClick('#contact')}>
            Записатися
          </Link>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileNavList}>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="tel:+380671234567" className={styles.mobileNavLink}>
                +38 (067) 123-45-67
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}


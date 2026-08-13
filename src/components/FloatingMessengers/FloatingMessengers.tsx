"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, X } from 'lucide-react';
import { MESSENGER_LINKS } from '@/components/Messengers/Messengers';
import styles from './FloatingMessengers.module.scss';

export default function FloatingMessengers() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.floatingWidget} ref={widgetRef}>
      {/* Popover Menu */}
      <div className={`${styles.popover} ${isOpen ? styles.open : ''}`}>
        <div className={styles.popoverHeader}>
          <div className={styles.headerTitle}>
            <Send className={styles.headerIcon} size={18} />
            <span>Зв&apos;язатися з нами</span>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Закрити"
          >
            <X size={16} />
          </button>
        </div>

        <div className={styles.popoverBody}>
          <p className={styles.promptText}>
            Оберіть зручний спосіб для швидкого зв&apos;язку:
          </p>

          <div className={styles.messengersList}>
            {MESSENGER_LINKS.map((messenger) => (
              <a
                key={messenger.name}
                href={messenger.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.messengerButton} ${styles[messenger.name.toLowerCase()]}`}
                onClick={() => setIsOpen(false)}
              >
                <span className={styles.iconWrapper}>{messenger.icon}</span>
                <span className={styles.messengerName}>Написати в {messenger.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Trigger Button */}
      <button
        type="button"
        className={`${styles.mainTrigger} ${isOpen ? styles.active : ''}`}
        onClick={toggleOpen}
        aria-label="Зв'язатися з нами"
        title="Зв'язатися з нами"
      >
        <div className={styles.pulseRing} />
        <div className={styles.iconContainer}>
          {isOpen ? <X size={26} /> : <Send size={24} className={styles.planeIcon} />}
        </div>
        <span className={styles.triggerLabel}>Зв&apos;язатися</span>
      </button>
    </div>
  );
}

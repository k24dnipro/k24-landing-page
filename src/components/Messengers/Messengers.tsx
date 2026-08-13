"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Messengers.module.scss';

export const MESSENGER_PHONE = "+380 93 650 80 52";
export const MESSENGER_PHONE_FORMATTED = "+38 (093) 650-80-52";
export const MESSENGER_PHONE_RAW = "380936508052";

export const MESSENGER_LINKS = [
  {
    name: "Telegram",
    href: "https://t.me/+380936508052",
    color: "#0088cc",
    iconSrc: "/contacts/icons8-telegram-96.png",
    icon: (
      <Image
        src="/contacts/icons8-telegram-96.png"
        alt="Telegram"
        width={24}
        height={24}
        className={styles.messengerIconImg}
      />
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/380936508052",
    color: "#25D366",
    iconSrc: "/contacts/icons8-whatsapp-96.png",
    icon: (
      <Image
        src="/contacts/icons8-whatsapp-96.png"
        alt="WhatsApp"
        width={24}
        height={24}
        className={styles.messengerIconImg}
      />
    ),
  },
  {
    name: "Viber",
    href: "viber://chat?number=%2B380936508052",
    color: "#7360f2",
    iconSrc: "/contacts/viber-svgrepo-com.svg",
    icon: (
      <Image
        src="/contacts/viber-svgrepo-com.svg"
        alt="Viber"
        width={24}
        height={24}
        className={styles.messengerIconImg}
      />
    ),
  },
];

interface MessengersProps {
  variant?: 'badges' | 'icons' | 'list';
  showPhone?: boolean;
  className?: string;
}

export default function Messengers({
  variant = 'badges',
  showPhone = false,
  className = '',
}: MessengersProps) {
  return (
    <div className={`${styles.messengersContainer} ${styles[variant]} ${className}`}>
      {showPhone && (
        <a href={`tel:+${MESSENGER_PHONE_RAW}`} className={styles.phoneLink}>
          {MESSENGER_PHONE_FORMATTED}
        </a>
      )}

      <div className={styles.linksGroup}>
        {MESSENGER_LINKS.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.messengerLink} ${styles[item.name.toLowerCase()]}`}
            aria-label={`Написати в ${item.name}`}
            title={`Написати в ${item.name}`}
          >
            <span className={styles.iconWrapper}>{item.icon}</span>
            {variant !== 'icons' && <span className={styles.name}>{item.name}</span>}
          </a>
        ))}
      </div>
    </div>
  );
}

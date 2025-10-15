"use client";

import { CheckCircle } from 'lucide-react';
import Button from '@/components/Button/Button';
import styles from './Hero.module.scss';

export default function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <video className={styles.backgroundVideo} autoPlay muted loop playsInline>
        <source src="/k24-bg.mp4" type="video/mp4" />
      </video>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <CheckCircle className={styles.icon} />
            12+ років досвіду в автосервісі
          </div>

          <h1 className={styles.title}>
            Кузовний центр
            <span className={styles.highlight}> повного циклу</span> у Дніпрі
          </h1>

          <p className={styles.subtitle}>
            Професійний ремонт та обслуговування автомобілів будь-якої
            складності. Гарантія якості, сучасне обладнання та кваліфіковані
            майстри.
          </p>

          <div className={styles.actions}>
            <Button
              className={styles.button}
              variant="primary"
              size="large"
              onClick={() => handleScrollToSection("contact")}
            >
              Записатися на ремонт
            </Button>
            <Button
              className={styles.button}
              variant="outline"
              size="large"
              onClick={() => handleScrollToSection("services")}
            >
              Наші послуги
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

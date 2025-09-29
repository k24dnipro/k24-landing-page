"use client";

import Button from "@/components/Button/Button";
import { CheckCircle, Users, Shield, Clock, ChevronDown } from "lucide-react";
import styles from "./Hero.module.scss";

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
        <source
          src="/Auto_Service_Website_Background_Video.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <CheckCircle className={styles.icon} />
            15+ років досвіду в автосервісі
          </div>

          <h1 className={styles.title}>
            Автосервіс повного <span className={styles.highlight}>циклу</span> у
            Дніпрі
          </h1>

          <p className={styles.subtitle}>
            Професійний ремонт та обслуговування автомобілів будь-якої
            складності. Гарантія якості, сучасне обладнання та кваліфіковані
            майстри.
          </p>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="large"
              onClick={() => handleScrollToSection("contact")}
            >
              Записатися на ремонт
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => handleScrollToSection("services")}
            >
              Наші послуги
            </Button>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <Users className={styles.featureIcon} />
              <span className={styles.featureText}>Кваліфіковані майстри</span>
            </div>

            <div className={styles.feature}>
              <Shield className={styles.featureIcon} />
              <span className={styles.featureText}>Гарантія на роботи</span>
            </div>

            <div className={styles.feature}>
              <Clock className={styles.featureIcon} />
              <span className={styles.featureText}>Швидке виконання</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.scrollIndicator}
        onClick={() => handleScrollToSection("about")}
      >
        <span>Прокрутіть вниз</span>
        <ChevronDown className={styles.scrollIcon} />
      </div>
    </section>
  );
}

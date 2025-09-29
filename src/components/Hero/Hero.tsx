'use client';

import Button from '@/components/Button/Button';
import styles from './Hero.module.scss';

export default function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Auto_Service_Website_Background_Video.mp4" type="video/mp4" />
      </video>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            15+ років досвіду в автосервісі
          </div>

          <h1 className={styles.title}>
            Автосервіс повного{' '}
            <span className={styles.highlight}>циклу</span>{' '}
            у Дніпрі
          </h1>

          <p className={styles.subtitle}>
            Професійний ремонт та обслуговування автомобілів будь-якої складності. 
            Гарантія якості, сучасне обладнання та кваліфіковані майстри.
          </p>

          <div className={styles.actions}>
            <Button 
              variant="primary" 
              size="large"
              onClick={() => handleScrollToSection('contact')}
            >
              Записатися на ремонт
            </Button>
            <Button 
              variant="outline" 
              size="large"
              onClick={() => handleScrollToSection('services')}
            >
              Наші послуги
            </Button>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <svg className={styles.featureIcon} fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              <span className={styles.featureText}>Кваліфіковані майстри</span>
            </div>

            <div className={styles.feature}>
              <svg className={styles.featureIcon} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={styles.featureText}>Гарантія на роботи</span>
            </div>

            <div className={styles.feature}>
              <svg className={styles.featureIcon} fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={styles.featureText}>Прозорі ціни</span>
            </div>

            <div className={styles.feature}>
              <svg className={styles.featureIcon} fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
              </svg>
              <span className={styles.featureText}>Швидке виконання</span>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={styles.scrollIndicator}
        onClick={() => handleScrollToSection('about')}
      >
        <span>Прокрутіть вниз</span>
        <svg className={styles.scrollIcon} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </section>
  );
}


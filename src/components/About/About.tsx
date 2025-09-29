import Section from '@/components/Section/Section';
import Button from '@/components/Button/Button';
import styles from './About.module.scss';

export default function About() {
  const stats = [
    { number: '15+', label: 'Років досвіду' },
    { number: '5000+', label: 'Відремонтованих авто' },
    { number: '98%', label: 'Задоволених клієнтів' },
    { number: '24/7', label: 'Підтримка клієнтів' },
  ];

  const features = [
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: 'Професійна команда',
      description: 'Наші майстри мають багаторічний досвід та постійно підвищують кваліфікацію на навчаннях від провідних виробників автомобілів.',
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: 'Сучасне обладнання',
      description: 'Використовуємо найновіше діагностичне та ремонтне обладнання від провідних світових виробників для точної діагностики.',
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Гарантія якості',
      description: 'Надаємо офіційну гарантію на всі виконані роботи та встановлені запчастини. Ваша впевненість - наш пріоритет.',
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Прозорі ціни',
      description: 'Всі роботи проводимо за фіксованими цінами без прихованих доплат. Детальну кошторисну розробляємо заздалегідь.',
    },
  ];

  return (
    <Section id="about" variant="light" className={styles.about}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <div className={styles.subtitle}>Про нас</div>
          <h2 className={styles.title}>
            СТО К24 - ваш надійний партнер у світі автомобілів
          </h2>
          <p className={styles.description}>
            Ми спеціалізуємося на професійному ремонті та обслуговуванні автомобілів різних марок. 
            Наша команда має багаторічний досвід роботи з європейськими, азіатськими та американськими автомобілями.
          </p>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="primary" size="large" href="#contact">
            Зв'язатися з нами
          </Button>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageGrid}>
            <div className={`${styles.image} ${styles.large}`}>
              {/* Placeholder for main garage image */}
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, #333 0%, #666 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFED00',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                Основний цех
              </div>
            </div>
            <div className={styles.image}>
              {/* Placeholder for tools image */}
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, #444 0%, #777 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFED00',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}>
                Обладнання
              </div>
            </div>
            <div className={styles.image}>
              {/* Placeholder for team image */}
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, #555 0%, #888 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFED00',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}>
                Команда
              </div>
            </div>
          </div>
          <div className={styles.badge}>
            Сертифіковано ISO 9001
          </div>
        </div>
      </div>
    </Section>
  );
}


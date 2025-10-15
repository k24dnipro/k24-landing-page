import {
  DollarSign,
  Shield,
  Users,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';
import Section from '@/components/Section/Section';
import styles from './About.module.scss';

export default function About() {
  const stats = [
    { number: "12+", label: "Років досвіду" },
    { number: "600+", label: "Відремонтованих авто" },
    { number: "98%", label: "Задоволених клієнтів" },
    { number: "24/7", label: "Підтримка клієнтів" },
  ];

  const features = [
    {
      icon: <Users />,
      title: "Досвідчена команда",
      description:
        "Наше СТО у Дніпрі спеціалізується на кузовному ремонті. Майстри з багаторічним досвідом відновлять авто будь-якої складності.",
    },
    {
      icon: <Wrench />,
      title: "Професійне обладнання",
      description:
        "Використовуємо сучасні стенди для геометрії кузова, фарбувальні камери та діагностичні системи від провідних брендів.",
    },
    {
      icon: <Shield />,
      title: "Гарантія якості",
      description:
        "Надаємо гарантію на всі кузовні роботи та запчастини. Контроль якості — обов’язкова частина кожного етапу ремонту.",
    },
    {
      icon: <DollarSign />,
      title: "Прозорі ціни",
      description:
        "Розраховуємо вартість ремонту заздалегідь. Без прихованих доплат — лише прозора ціна та офіційний кошторис.",
    },
  ];

  return (
    <Section id="about" variant="light" className={styles.about}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <div className={styles.subtitle}>Про нас</div>
          <h2 className={styles.title}>
            К24 - ваш надійний партнер у світі автомобілів
          </h2>
          <p className={styles.description}>
            Ми спеціалізуємося на професійному ремонті та обслуговуванні
            автомобілів різних марок. Наша команда має багаторічний досвід
            роботи з європейськими, азіатськими та американськими автомобілями.
          </p>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageGrid}>
            <div className={`${styles.image} ${styles.large}`}>
              <Image
                src="/images/about-1.jpeg"
                width={400}
                height={400}
                alt="Image"
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/about-2.jpg"
                width={400}
                height={400}
                alt="Image"
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/about-3.jpg"
                width={400}
                height={400}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Наші переваги:</h2>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

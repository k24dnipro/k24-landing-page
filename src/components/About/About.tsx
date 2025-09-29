import Section from "@/components/Section/Section";
import Button from "@/components/Button/Button";
import { Users, Wrench, Shield, DollarSign } from "lucide-react";
import styles from "./About.module.scss";

export default function About() {
  const stats = [
    { number: "15+", label: "Років досвіду" },
    { number: "5000+", label: "Відремонтованих авто" },
    { number: "98%", label: "Задоволених клієнтів" },
    { number: "24/7", label: "Підтримка клієнтів" },
  ];

  const features = [
    {
      icon: <Users />,
      title: "Професійна команда",
      description:
        "Наші майстри мають багаторічний досвід та постійно підвищують кваліфікацію на навчаннях від провідних виробників автомобілів.",
    },
    {
      icon: <Wrench />,
      title: "Сучасне обладнання",
      description:
        "Використовуємо найновіше діагностичне та ремонтне обладнання від провідних світових виробників для точної діагностики.",
    },
    {
      icon: <Shield />,
      title: "Гарантія якості",
      description:
        "Надаємо офіційну гарантію на всі виконані роботи та встановлені запчастини. Ваша впевненість - наш пріоритет.",
    },
    {
      icon: <DollarSign />,
      title: "Прозорі ціни",
      description:
        "Всі роботи проводимо за фіксованими цінами без прихованих доплат. Детальну кошторисну розробляємо заздалегідь.",
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

          <Button variant="primary" size="large" href="#contact">
            Зв&apos;язатися з нами
          </Button>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageGrid}>
            <div className={`${styles.image} ${styles.large}`}>
              {/* Placeholder for main garage image */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #333 0%, #666 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFED00",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Основний цех
              </div>
            </div>
            <div className={styles.image}>
              {/* Placeholder for tools image */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #444 0%, #777 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFED00",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Обладнання
              </div>
            </div>
            <div className={styles.image}>
              {/* Placeholder for team image */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #555 0%, #888 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFED00",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Команда
              </div>
            </div>
          </div>
          <div className={styles.badge}>Сертифіковано ISO 9001</div>
        </div>
      </div>
    </Section>
  );
}

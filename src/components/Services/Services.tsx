import Button from '@/components/Button/Button';
import Section from '@/components/Section/Section';
import { Service } from '@/types';
import styles from './Services.module.scss';

export default function Services() {
  const services: Service[] = [
    {
      id: "painting",
      title: "Фарбування авто",
      description:
        "Професійне фарбування автомобілів з використанням якісних фарб та сучасного обладнання. Повне або локальне фарбування у  фарбувальній камері.",
      icon: "🎨",
      features: [
        "Повне фарбування кузова",
        "Локальне фарбування",
        "Фарбування дисків",
        "Камерне фарбування",
        "Гарантія якості покриття",
      ],
    },
    {
      id: "straightening",
      title: "Рихтування",
      description:
        "Відновлення геометрії кузова після ДТП. Рихтування вм'ятин, деформацій та пошкоджень різної складності.",
      icon: "🔨",
      features: [
        "Рихтування після ДТП",
        "Усунення вм'ятин",
        "Відновлення геометрії кузова",
        "Заміна деталей кузова",
      ],
    },
    {
      id: "polishing",
      title: "Полірування",
      description:
        "Професійне полірування кузова для відновлення блиску, усунення подряпин та захисту лакофарбового покриття.",
      icon: "✨",
      features: [
        "Абразивне полірування",
        "Захисне полірування",
        "Усунення подряпин",
        "Відновлення блиску",
        "Нанесення захисних покриттів",
      ],
    },
    {
      id: "color-matching",
      title: "Підбір автофарби",
      description:
        "Комп'ютерний підбір фарби для точного відповідності кольору вашого автомобіля. Підбір за кодом або зразком.",
      icon: "🎯",
      features: [
        "Комп'ютерний підбір кольору",
        "Підбір за VIN-кодом",
        "Підбір за зразком",
        "Підбір фарби встик",
      ],
    },
    {
      id: "turnkey-car",
      title: "Авто під ключ",
      description:
        "Повний комплекс робіт з відновлення автомобіля після ДТП або довгострокової експлуатації. Від діагностики до готового автомобіля.",
      icon: "🚗",
      features: [
        "Повна діагностика стану",
        "Рихтування кузова",
        "Фарбування всіх елементів",
        "Заміна пошкоджених деталей",
        "Фінальна поліровка та детейлінг",
        "Гарантія на всі роботи",
      ],
    },
    {
      id: "headlight-polishing",
      title: "Полірування фар",
      description:
        "Відновлення прозорості та блиску фар. Усунення помутніння, жовтизни та подряпин на оптиці автомобіля.",
      icon: "💡",
      features: [
        "Усунення помутніння фар",
        "Видалення жовтизни",
        "Полірування пластику оптики",
        "Захисне покриття фар",
        "Відновлення яскравості світла",
      ],
    },
  ];

  return (
    <Section
      id="services"
      variant="dark"
      title="Популярні послуги"
      subtitle="Професійні послуги з малярних робіт та відновлення кузова автомобіля"
      className={styles.services}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`
                ${styles.serviceCard} 
                ${index === 0 ? styles.popularService : ""}
              `}
            >
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon}>{service.icon}</div>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="primary"
                size="medium"
                className={styles.serviceAction}
                href="#contact"
              >
                Замовити послугу
              </Button>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Не знайшли потрібну послугу?</h3>
          <p className={styles.ctaDescription}>
            Зв&apos;яжіться з нами для отримання консультації. Ми виконуємо
            різноманітні роботи з ремонту та обслуговування автомобілів
            будь-якої складності.
          </p>
          <div className={styles.ctaActions}>
            <Button variant="primary" size="large" href="#contact">
              Консультація спеціаліста
            </Button>
            <Button variant="outline" size="large" href="tel:+380671234567">
              Подзвонити зараз
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

import Button from '@/components/Button/Button';
import Section from '@/components/Section/Section';
import { Service } from '@/types';
import styles from './Services.module.scss';

export default function Services() {
  const services: Service[] = [
    {
      id: "straightening",
      title: "Рихтування",
      description:
        "Відновлення геометрії кузова після ДТП. Рихтування вм'ятин, деформацій та пошкоджень різної складності.",
      icon: "",
      features: [
        "Рихтування після ДТП",
        "Усунення вм'ятин",
        "Відновлення геометрії кузова",
        "Заміна деталей кузова",
      ],
    },
    {
      id: "painting",
      title: "Фарбування авто",
      description:
        "Професійне фарбування автомобілів з використанням якісних фарб та сучасного обладнання. Повне або локальне фарбування у фарбувальній камері.",
      icon: "",
      features: [
        "Повне фарбування кузова",
        "Локальне фарбування",
        "Фарбування дисків",
        "Камерне фарбування",
        "Гарантія якості покриття",
      ],
    },
    {
      id: "minor-repair",
      title: "Дрібний ремонт",
      description:
        "Усунення несправностей, заміна зношених деталей, підготовка авто до експлуатації без зайвих витрат.",
      icon: "",
      features: [
        "Усунення несправностей",
        "Заміна зношених деталей",
        "Підготовка авто до експлуатації",
        "Без зайвих витрат",
      ],
    },
    {
      id: "oils-fluids",
      title: "Заміна олив та технічних рідин",
      description:
        "Професійна заміна моторної оливи, антифризу, гальмівної рідини, масла в КПП та інших робочих рідин.",
      icon: "",
      features: [
        "Заміна моторної оливи",
        "Заміна антифризу",
        "Гальмівна рідина та масло КПП",
        "Інші робочі рідини",
      ],
    },
    {
      id: "suspension",
      title: "Ремонт підвіски",
      description:
        "Заміна важелів, сайлентблоків, амортизаторів та інших елементів ходової частини для комфортної та безпечної їзди.",
      icon: "",
      features: [
        "Заміна важелів та сайлентблоків",
        "Заміна амортизаторів",
        "Елементи ходової частини",
        "Комфорт та безпека їзди",
      ],
    },
    {
      id: "brakes",
      title: "Обслуговування гальмівної системи",
      description:
        "Заміна колодок, дисків, ремонт супортів та повна перевірка гальм.",
      icon: "",
      features: [
        "Заміна колодок та дисків",
        "Ремонт супортів",
        "Повна перевірка гальм",
      ],
    },
    {
      id: "diagnostics",
      title: "Комп'ютерна діагностика",
      description:
        "Сучасне обладнання дозволяє швидко знайти помилки, перевірити системи автомобіля та запобігти дорогому ремонту.",
      icon: "",
      features: [
        "Швидке виявлення помилок",
        "Перевірка систем автомобіля",
        "Запобігання дорогому ремонту",
      ],
    },
    {
      id: "maintenance",
      title: "Планове технічне обслуговування (ТО)",
      description:
        "Комплексна перевірка авто, регламентні роботи та рекомендації по подальшій експлуатації.",
      icon: "",
      features: [
        "Комплексна перевірка авто",
        "Регламентні роботи",
        "Рекомендації по експлуатації",
      ],
    },
  ];

  return (
    <Section
      id="services"
      variant="dark"
      title="Обслуговування та ремонт автомобілів"
      subtitle="Ми виконуємо швидкий та якісний поточний ремонт, щоб ваш автомобіль залишався надійним щодня."
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
              {service.icon ? (
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                </div>
              ) : null}
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
            <Button variant="outline" size="large" href="tel:+380987774401">
              Подзвонити зараз
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

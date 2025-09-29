import Section from '@/components/Section/Section';
import Button from '@/components/Button/Button';
import { Service } from '@/types';
import styles from './Services.module.scss';

export default function Services() {
  const services: Service[] = [
    {
      id: 'engine',
      title: 'Ремонт двигуна',
      description: 'Професійний ремонт та діагностика двигунів всіх типів. Капітальний ремонт, заміна комплектуючих, усунення несправностей.',
      icon: '🔧',
      features: [
        'Діагностика двигуна',
        'Капітальний ремонт',
        'Заміна поршневої групи',
        'Ремонт головки блоку',
        'Налаштування системи живлення'
      ],
      price: 'від 3000 ₴'
    },
    {
      id: 'transmission',
      title: 'Ремонт трансмісії',
      description: 'Ремонт механічних та автоматичних коробок передач, зчеплення, диференціалів та інших елементів трансмісії.',
      icon: '⚙️',
      features: [
        'МКПП та АКПП',
        'Ремонт зчеплення',
        'Заміна олив та фільтрів',
        'Діагностика несправностей',
        'Налаштування електроніки'
      ],
      price: 'від 2500 ₴'
    },
    {
      id: 'brakes',
      title: 'Гальмівна система',
      description: 'Повне обслуговування гальмівної системи: заміна колодок, дисків, рідини, ремонт гальмівних циліндрів.',
      icon: '🛑',
      features: [
        'Заміна гальмівних колодок',
        'Заміна гальмівних дисків',
        'Прокачка гальмівної системи',
        'Ремонт гальмівних циліндрів',
        'Заміна гальмівної рідини'
      ],
      price: 'від 800 ₴'
    },
    {
      id: 'suspension',
      title: 'Підвіска та рульове',
      description: 'Ремонт та заміна елементів підвіски, рульового управління, розвал-сходження коліс.',
      icon: '🚗',
      features: [
        'Заміна амортизаторів',
        'Ремонт рульових тяг',
        'Розвал-сходження',
        'Заміна сайлентблоків',
        'Балансування коліс'
      ],
      price: 'від 1200 ₴'
    },
    {
      id: 'electrical',
      title: 'Електрообладнання',
      description: 'Діагностика та ремонт електричних систем автомобіля, установка додаткового обладнання.',
      icon: '⚡',
      features: [
        'Комп\'ютерна діагностика',
        'Ремонт електропроводки',
        'Заміна акумулятора',
        'Ремонт генератора',
        'Установка сигналізації'
      ],
      price: 'від 500 ₴'
    },
    {
      id: 'emergency',
      title: 'Термінова допомога',
      description: 'Цілодобова служба термінової технічної допомоги на дорозі. Евакуація, запуск двигуна, аварійний ремонт.',
      icon: '🚨',
      features: [
        'Цілодобова служба',
        'Виїзд на місце поломки',
        'Евакуація автомобіля',
        'Запуск двигуна',
        'Аварійний ремонт'
      ],
      price: 'від 300 ₴'
    }
  ];

  return (
    <Section 
      id="services" 
      variant="dark" 
      title="Наші послуги"
      subtitle="Повний спектр послуг з ремонту та обслуговування автомобілів"
      className={styles.services}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`
                ${styles.serviceCard} 
                ${service.id === 'emergency' ? styles.emergencyService : ''} 
                ${index === 0 ? styles.popularService : ''}
              `}
            >
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                {service.price && (
                  <div className={styles.servicePrice}>
                    {service.price}
                    <span className={styles.priceLabel}>Базова ціна</span>
                  </div>
                )}
              </div>

              <h3 className={styles.serviceTitle}>
                {service.title}
              </h3>

              <p className={styles.serviceDescription}>
                {service.description}
              </p>

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
          <h3 className={styles.ctaTitle}>
            Не знайшли потрібну послугу?
          </h3>
          <p className={styles.ctaDescription}>
            Зв&apos;яжіться з нами для отримання консультації. Ми виконуємо різноманітні 
            роботи з ремонту та обслуговування автомобілів будь-якої складності.
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


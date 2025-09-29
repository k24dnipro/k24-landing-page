import Section from '@/components/Section/Section';
import Button from '@/components/Button/Button';
import { Review } from '@/types';
import styles from './Reviews.module.scss';

export default function Reviews() {
  const stats = [
    {
      icon: '⭐',
      number: '4.9',
      label: 'Середній рейтинг'
    },
    {
      icon: '👥',
      number: '1200+',
      label: 'Відгуків клієнтів'
    },
    {
      icon: '🔄',
      number: '85%',
      label: 'Постійних клієнтів'
    },
    {
      icon: '📱',
      number: '24/7',
      label: 'Онлайн підтримка'
    }
  ];

  const reviews: Review[] = [
    {
      id: '1',
      name: 'Олександр Петренко',
      rating: 5,
      comment: 'Відмінний сервіс! Ремонтували двигун BMW - робота виконана якісно та в строк. Майстри професійні, ціни адекватні. Обов\'язково повернуся ще.',
      date: '2024-01-15',
      service: 'Ремонт двигуна'
    },
    {
      id: '2',
      name: 'Марія Іваненко',
      rating: 5,
      comment: 'Дуже задоволена роботою! Швидко знайшли проблему з підвіскою, замінили всі необхідні деталі. Автомобіль їздить як новий. Рекомендую всім!',
      date: '2024-01-10',
      service: 'Ремонт підвіски'
    },
    {
      id: '3',
      name: 'Андрій Коваленко',
      rating: 5,
      comment: 'Професійна діагностика та ремонт електрообладнання. Проблему знайшли швидко, ціна справедлива. Дякую за якісну роботу!',
      date: '2024-01-08',
      service: 'Електродіагностика'
    },
    {
      id: '4',
      name: 'Світлана Мельник',
      rating: 4,
      comment: 'Гарний автосервіс з кваліфікованими майстрами. Ремонт гальм пройшов успішно, все пояснили детально. Єдиний мінус - трохи довго чекала.',
      date: '2024-01-05',
      service: 'Ремонт гальм'
    },
    {
      id: '5',
      name: 'Віталій Шевченко',
      rating: 5,
      comment: 'Вже не перший раз звертаюся в К24. Завжди якісно, швидко та за розумні гроші. Особливо подобається, що всі роботи під гарантією.',
      date: '2023-12-28',
      service: 'Технічне обслуговування'
    },
    {
      id: '6',
      name: 'Ірина Бондаренко',
      rating: 5,
      comment: 'Відмінний сервіс! Терміново потрібна була допомога на дорозі - приїхали швидко, завели машину. Дуже вдячна за оперативність!',
      date: '2023-12-25',
      service: 'Технічна допомога'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`${styles.star} ${index >= rating ? styles.emptyStar : ''}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Section 
      id="reviews"
      variant="dark"
      title="Відгуки клієнтів"
      subtitle="Що кажуть наші клієнти про якість наших послуг"
      className={styles.reviews}
    >
      <div className={styles.container}>
        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <div className={styles.statIcon}>
                {stat.icon}
              </div>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`${styles.reviewCard} ${index === 0 ? styles.featured : ''}`}
            >
              <div className={styles.reviewHeader}>
                <div className={styles.reviewAuthor}>
                  <div className={styles.avatar}>
                    {getInitials(review.name)}
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>
                      {review.name}
                    </div>
                    <div className={styles.reviewDate}>
                      {new Date(review.date).toLocaleDateString('uk-UA', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
                <div className={styles.rating}>
                  {renderStars(review.rating)}
                </div>
              </div>

              {review.service && (
                <div className={styles.reviewService}>
                  {review.service}
                </div>
              )}

              <p className={styles.reviewComment}>
                {review.comment}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaIcon}>
            ⭐
          </div>
          <h3 className={styles.ctaTitle}>
            Залиште свій відгук
          </h3>
          <p className={styles.ctaDescription}>
            Ваша думка важлива для нас! Поділіться досвідом співпраці з нашим автосервісом 
            та допоможіть іншим клієнтам зробити правильний вибір.
          </p>
          <div className={styles.ctaActions}>
            <Button variant="primary" size="large" href="#contact">
              Написати відгук
            </Button>
            <Button variant="outline" size="large" href="tel:+380671234567">
              Зателефонувати
            </Button>
          </div>

          <div className={styles.platformLinks}>
            <a 
              href="https://www.google.com/search?q=СТО+К24+Дніпро" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.platformLink}
            >
              <svg className={styles.platformIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google Reviews
            </a>
            
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.platformLink}
            >
              <svg className={styles.platformIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}


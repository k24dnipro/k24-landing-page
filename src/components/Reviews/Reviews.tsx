import { Star } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import Section from '@/components/Section/Section';
import { Review } from '@/types';
import styles from './Reviews.module.scss';

export default function Reviews() {
  const stats = [
    {
      icon: "⭐",
      number: "4.9",
      label: "Середній рейтинг",
    },
    {
      icon: "👥",
      number: "120+",
      label: "Відгуків клієнтів",
    },
    {
      icon: "🔄",
      number: "85%",
      label: "Постійних клієнтів",
    },
    {
      icon: "📱",
      number: "24/7",
      label: "Надйіна підтримка",
    },
  ];

  const reviews: Review[] = [
    {
      id: "1",
      name: "Олександр Петренко",
      rating: 5,
      comment:
        "Відмінний сервіс! Ремонтували двигун BMW - робота виконана якісно та в строк. Майстри професійні, ціни адекватні. Обов'язково повернуся ще.",
      date: "2024-01-15",
      service: "Ремонт двигуна",
    },
    {
      id: "2",
      name: "Марія Іваненко",
      rating: 5,
      comment:
        "Дуже задоволена роботою! Швидко знайшли проблему з підвіскою, замінили всі необхідні деталі. Автомобіль їздить як новий. Рекомендую всім!",
      date: "2024-01-10",
      service: "Ремонт підвіски",
    },
    {
      id: "3",
      name: "Андрій Коваленко",
      rating: 5,
      comment:
        "Професійна діагностика та ремонт електрообладнання. Проблему знайшли швидко, ціна справедлива. Дякую за якісну роботу!",
      date: "2024-01-08",
      service: "Електродіагностика",
    },
    {
      id: "4",
      name: "Світлана Мельник",
      rating: 4,
      comment:
        "Гарний автосервіс з кваліфікованими майстрами. Ремонт гальм пройшов успішно, все пояснили детально. Єдиний мінус - трохи довго чекала.",
      date: "2024-01-05",
      service: "Ремонт гальм",
    },
    {
      id: "5",
      name: "Віталій Шевченко",
      rating: 5,
      comment:
        "Вже не перший раз звертаюся в К24. Завжди якісно, швидко та за розумні гроші. Особливо подобається, що всі роботи під гарантією.",
      date: "2023-12-28",
      service: "Технічне обслуговування",
    },
    {
      id: "6",
      name: "Ірина Бондаренко",
      rating: 5,
      comment:
        "Відмінний сервіс! Терміново потрібна була допомога на дорозі - приїхали швидко, завели машину. Дуже вдячна за оперативність!",
      date: "2023-12-25",
      service: "Технічна допомога",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`${styles.star} ${index >= rating ? styles.emptyStar : ""}`}
        fill="currentColor"
      />
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
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
              <div className={styles.statIcon}>{stat.icon}</div>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.map((review) => (
            <div key={review.id} className={`${styles.reviewCard} `}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewAuthor}>
                  <div className={styles.avatar}>
                    {getInitials(review.name)}
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{review.name}</div>
                    <div className={styles.reviewDate}>
                      {new Date(review.date).toLocaleDateString("uk-UA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
                <div className={styles.rating}>
                  {renderStars(review.rating)}
                </div>
              </div>

              {review.service && (
                <div className={styles.reviewService}>{review.service}</div>
              )}

              <p className={styles.reviewComment}>{review.comment}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaIcon}>⭐</div>
          <h3 className={styles.ctaTitle}>Залиште свій відгук</h3>
          <p className={styles.ctaDescription}>
            Ваша думка важлива для нас! Поділіться досвідом співпраці з нашим
            автосервісом та допоможіть іншим клієнтам зробити правильний вибір.
          </p>
          <div className={styles.googleReviewsSection}>
            <div className={styles.googleReviewsContent}>
              <div className={styles.googleReviewsInfo}>
                <div className={styles.googleLogo}>
                  <Image
                    src="/Google-logo.webp"
                    alt="Google Logo"
                    width={92}
                    height={30}
                  />
                </div>
                <div className={styles.googleReviewsText}>
                  <h3 className={styles.googleReviewsTitle}>Google Рейтинг</h3>
                  <p className={styles.googleReviewsSubtitle}>відгуки</p>
                </div>
              </div>
              <Button
                variant="primary"
                size="large"
                href="https://www.google.com/search?sca_esv=77667d73f37b3433&biw=1710&bih=951&sxsrf=AE3TifOhA5142yL_f0PGykcAgen8e5xPFQ:1760876551645&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_LJCPSr3HYikWW4x8bFU0s0N_Ou87AADNiYzxlCao9c_zOIiI7AzmQ1fpoL-KYrAEM7fzBRrJy6BKT_KXzywXnA1gLRRP9fzfyZqua6Iskb41dCJg%3D%3D&q=K24.kuzovnyy+Tsentr+%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B&sa=X&ved=2ahUKEwjdtOqqoLCQAxXDR_EDHcHwBWAQ0bkNegQIHxAE"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.googleReviewsButton}
              >
                Написати відгук
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

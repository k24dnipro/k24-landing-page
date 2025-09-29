import { SectionProps } from '@/types';
import styles from './Section.module.scss';

interface ExtendedSectionProps extends SectionProps {
  variant?: 'light' | 'dark' | 'gray';
  title?: string;
  subtitle?: string;
  titleGradient?: boolean;
}

export default function Section({
  id,
  className = '',
  children,
  variant = 'light',
  title,
  subtitle,
  titleGradient = false,
}: ExtendedSectionProps) {
  const sectionClasses = `${styles.section} ${styles[variant]} ${className}`.trim();

  return (
    <section id={id} className={sectionClasses}>
      <div className={styles.container}>
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && (
              <h2 className={`${styles.title} ${titleGradient ? styles.gradient : ''}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={styles.subtitle}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}


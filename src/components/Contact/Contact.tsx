'use client';

import { useState } from 'react';
import Section from '@/components/Section/Section';
import Button from '@/components/Button/Button';
import { FormData, ContactInfo } from '@/types';
import styles from './Contact.module.scss';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo: ContactInfo = {
    phone: '+38 (067) 123-45-67',
    email: 'info@k24dnipro.com',
    address: 'вул. Автомобільна, 24, Дніпро, 49000',
    workingHours: {
      weekdays: 'Пн-Пт: 08:00 - 20:00',
      weekend: 'Сб-Нд: 09:00 - 18:00'
    },
    socialMedia: {
      instagram: 'https://instagram.com/k24dnipro',
      facebook: 'https://facebook.com/k24dnipro',
      telegram: 'https://t.me/k24dnipro'
    }
  };

  const services = [
    { value: '', label: 'Оберіть послугу' },
    { value: 'engine', label: 'Ремонт двигуна' },
    { value: 'transmission', label: 'Ремонт трансмісії' },
    { value: 'brakes', label: 'Гальмівна система' },
    { value: 'suspension', label: 'Підвіска та рульове' },
    { value: 'electrical', label: 'Електрообладнання' },
    { value: 'maintenance', label: 'Технічне обслуговування' },
    { value: 'emergency', label: 'Термінова допомога' },
    { value: 'other', label: 'Інше' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Вкажіть ваше ім\'я';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Вкажіть номер телефону';
    } else if (!/^\+?3?8?0\d{9}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Невірний формат номера телефону';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Невірний формат email';
    }

    if (!formData.service) {
      newErrors.service = 'Оберіть послугу';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Section 
        id="contact"
        variant="light"
        title="Контакти"
        subtitle="Зв'яжіться з нами зручним для вас способом"
        className={styles.contact}
      >
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>
            <svg fill="currentColor" viewBox="0 0 20 20" width="30" height="30">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className={styles.successTitle}>Дякуємо за звернення!</h3>
          <p className={styles.successText}>
            Ваша заявка успішно відправлена. Наш менеджер зв&apos;яжеться з вами найближчим часом 
            для уточнення деталей та призначення зустрічі.
          </p>
          <Button 
            variant="primary" 
            size="large"
            onClick={() => setIsSubmitted(false)}
          >
            Надіслати ще одну заявку
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section 
      id="contact"
      variant="light"
      title="Контакти"
      subtitle="Зв'яжіться з нами зручним для вас способом"
      className={styles.contact}
    >
      <div className={styles.grid}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Телефон</h3>
                <p className={styles.cardText}>
                  <a href={`tel:${contactInfo.phone.replace(/[\s\-\(\)]/g, '')}`} className={styles.cardLink}>
                    {contactInfo.phone}
                  </a>
                </p>
                <p className={styles.cardText}>Цілодобова лінія підтримки</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Email</h3>
                <p className={styles.cardText}>
                  <a href={`mailto:${contactInfo.email}`} className={styles.cardLink}>
                    {contactInfo.email}
                  </a>
                </p>
                <p className={styles.cardText}>Відповідаємо протягом години</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Адреса</h3>
                <p className={styles.cardText}>{contactInfo.address}</p>
                <p className={styles.cardText}>Район Центральний</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Режим роботи</h3>
                <p className={styles.cardText}>{contactInfo.workingHours.weekdays}</p>
                <p className={styles.cardText}>{contactInfo.workingHours.weekend}</p>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a 
              href={contactInfo.socialMedia.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.174-1.559l3.521-2.663c.666-.504 1.621-.379 2.124.287c.504.666.379 1.621-.287 2.124L8.449 16.988z"/>
              </svg>
            </a>
            
            <a 
              href={contactInfo.socialMedia.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            <a 
              href={contactInfo.socialMedia.telegram} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Записатися на ремонт</h3>
            <p className={styles.formDescription}>
              Заповніть форму, і наш менеджер зв&apos;яжеться з вами протягом 15 хвилин
            </p>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Ім&apos;я *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`${styles.formInput} ${errors.name ? styles.error : ''}`}
                  placeholder="Введіть ваше ім'я"
                />
                {errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`${styles.formInput} ${errors.phone ? styles.error : ''}`}
                  placeholder="+38 (067) 123-45-67"
                />
                {errors.phone && <div className={styles.errorMessage}>{errors.phone}</div>}
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email (необов&apos;язково)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                  placeholder="your@email.com"
                />
                {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.formLabel}>
                  Послуга *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`${styles.formSelect} ${errors.service ? styles.error : ''}`}
                >
                  {services.map(service => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                {errors.service && <div className={styles.errorMessage}>{errors.service}</div>}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Додаткова інформація (необов&apos;язково)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.formTextarea}
                placeholder="Опишіть проблему або додайте коментар..."
                rows={4}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="large"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Надсилаємо...' : 'Надіслати заявку'}
            </Button>
          </form>
        </div>
      </div>

      <div className={styles.emergencySection}>
        <div className={styles.emergencyIcon}>
          🚨
        </div>
        <h3 className={styles.emergencyTitle}>Термінова допомога 24/7</h3>
        <p className={styles.emergencyText}>
          Потрібна негайна технічна допомога? Наша служба евакуації та аварійного ремонту 
          працює цілодобово у всіх районах Дніпра та області.
        </p>
        <Button 
          variant="primary" 
          size="large"
          href="tel:+380671234567"
          className={styles.emergencyButton}
        >
          Викликати термінову допомогу
        </Button>
      </div>

      <div className={styles.mapSection}>
        <h3 className={styles.mapTitle}>Як нас знайти</h3>
        <div className={styles.mapContainer}>
          Карта розташування СТО К24
          <br />
          {contactInfo.address}
        </div>
      </div>
    </Section>
  );
}


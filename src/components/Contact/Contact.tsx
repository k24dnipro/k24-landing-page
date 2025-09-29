'use client';

import { useState } from 'react';
import Section from '@/components/Section/Section';
import Button from '@/components/Button/Button';
import { CheckCircle, Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
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
            <CheckCircle size={30} />
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
                <Phone />
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
                <Mail />
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
                <MapPin />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Адреса</h3>
                <p className={styles.cardText}>{contactInfo.address}</p>
                <p className={styles.cardText}>Район Центральний</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <Clock />
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
              <Instagram />
            </a>
            
            <a 
              href={contactInfo.socialMedia.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Facebook />
            </a>
            
            <a 
              href={contactInfo.socialMedia.telegram} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <MessageCircle />
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


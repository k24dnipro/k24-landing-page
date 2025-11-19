"use client";

import { useState } from 'react';
import {
  CheckCircle,
  MapPin,
  Phone,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button/Button';
import Section from '@/components/Section/Section';
import { ContactInfo } from '@/types';
import styles from './Contact.module.scss';

interface FormData {
  name: string;
  phone: string;
  message?: string;
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Your Telegram group chat ID - you need to get this
  // To get it: Add your bot to the group, then visit:
  // https://api.telegram.org/bot8375912165:AAH6hGtPkICLLhhlFrz3CRtySqvc75FOe9U/getUpdates
  const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || '-4819273916';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const contactInfo: ContactInfo = {
    phone: "+38 (098) 777-44-01",
    phones: ["+38 (098) 777-44-01", "+38 (097) 959-05-05"],
    email: "info@k24dnipro.com",
    address:
      "вулиця Нижньодніпровська, Дніпро, Дніпропетровська область, 49000",
    workingHours: {
      weekdays: "Пн-Пт: 08:00 - 20:00",
      weekend: "Сб-Нд: 09:00 - 18:00",
    },
  };

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          message: data.message || '',
          chatId: TELEGRAM_CHAT_ID,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Помилка відправки форми. Спробуйте ще раз.'
      );
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
            Ваша заявка успішно відправлена. Наш менеджер зв&apos;яжеться з вами
            найближчим часом для уточнення деталей та призначення зустрічі.
          </p>
          <Button
            variant="primary"
            size="large"
            onClick={() => setIsSubmitted(false)}
            className={styles.againSubmitButton}
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
                <div className={styles.cardText}>
                  {contactInfo.phones?.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/[\s\-\(\)]/g, "")}`}
                      className={styles.cardLink}
                    >
                      {phone}
                    </a>
                  )) || (
                    <a
                      href={`tel:${contactInfo.phone.replace(/[\s\-\(\)]/g, "")}`}
                      className={styles.cardLink}
                    >
                      {contactInfo.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <MapPin />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Адреса</h3>
                <p className={styles.cardText}>{contactInfo.address}</p>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.1208805921365!2d35.0372704!3d48.53091509999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d959cc38a83879%3A0xe26e803710fa4587!2sK24.kuzovnyy%20Tsentr!5e0!3m2!1sru!2sua!4v1760877404771!5m2!1sru!2sua"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="K24 Кузовний Центр на карті"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={styles.formTitle}>Записатися на ремонт</h3>
            <p className={styles.formDescription}>
              Заповніть форму, і наш менеджер зв&apos;яжеться з вами протягом 15
              хвилин
            </p>

            {submitError && (
              <div className={styles.errorBanner}>
                {submitError}
              </div>
            )}

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Ім&apos;я *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', {
                    required: "Вкажіть ваше ім'я",
                    minLength: {
                      value: 2,
                      message: "Ім'я повинно містити мінімум 2 символи",
                    },
                  })}
                  className={`${styles.formInput} ${
                    errors.name ? styles.error : ""
                  }`}
                  placeholder="Введіть ваше ім'я"
                />
                {errors.name && (
                  <div className={styles.errorMessage}>{errors.name.message}</div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', {
                    required: "Вкажіть номер телефону",
                    pattern: {
                      value: /^\+?3?8?0?\d{9}$/,
                      message: "Невірний формат номера телефону",
                    },
                  })}
                  className={`${styles.formInput} ${
                    errors.phone ? styles.error : ""
                  }`}
                  placeholder="+38 (067) 123-45-67"
                />
                {errors.phone && (
                  <div className={styles.errorMessage}>{errors.phone.message}</div>
                )}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Додаткова інформація (необов&apos;язково)
              </label>
              <textarea
                id="message"
                {...register('message')}
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
              {isSubmitting ? "Надсилаємо..." : "Надіслати заявку"}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

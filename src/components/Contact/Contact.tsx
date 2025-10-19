"use client";

import { useState } from 'react';
import {
  CheckCircle,
  MapPin,
  Phone,
} from 'lucide-react';
import Button from '@/components/Button/Button';
import Section from '@/components/Section/Section';
import {
  ContactInfo,
  FormData,
} from '@/types';
import styles from './Contact.module.scss';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo: ContactInfo = {
    phone: "+38 (067) 123-45-67",
    email: "info@k24dnipro.com",
    address: "вул. Автомобільна, 24, Дніпро, 49000",
    workingHours: {
      weekdays: "Пн-Пт: 08:00 - 20:00",
      weekend: "Сб-Нд: 09:00 - 18:00",
    },
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Вкажіть ваше ім'я";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Вкажіть номер телефону";
    } else if (
      !/^\+?3?8?0\d{9}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ""))
    ) {
      newErrors.phone = "Невірний формат номера телефону";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
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
            Ваша заявка успішно відправлена. Наш менеджер зв&apos;яжеться з вами
            найближчим часом для уточнення деталей та призначення зустрічі.
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
                  <a
                    href={`tel:${contactInfo.phone.replace(/[\s\-\(\)]/g, "")}`}
                    className={styles.cardLink}
                  >
                    {contactInfo.phone}
                  </a>
                </p>
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
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Записатися на ремонт</h3>
            <p className={styles.formDescription}>
              Заповніть форму, і наш менеджер зв&apos;яжеться з вами протягом 15
              хвилин
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
                  className={`${styles.formInput} ${
                    errors.name ? styles.error : ""
                  }`}
                  placeholder="Введіть ваше ім'я"
                />
                {errors.name && (
                  <div className={styles.errorMessage}>{errors.name}</div>
                )}
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
                  className={`${styles.formInput} ${
                    errors.phone ? styles.error : ""
                  }`}
                  placeholder="+38 (067) 123-45-67"
                />
                {errors.phone && (
                  <div className={styles.errorMessage}>{errors.phone}</div>
                )}
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
              {isSubmitting ? "Надсилаємо..." : "Надіслати заявку"}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

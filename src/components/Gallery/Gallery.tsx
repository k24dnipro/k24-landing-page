"use client";

import {
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import Section from '@/components/Section/Section';
import { GalleryImage } from '@/types';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import styles from './Gallery.module.scss';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [visibleItems, setVisibleItems] = useState(6);

  const filters = [
    { id: "all", label: "Всі роботи" },
    { id: "engine", label: "Двигун" },
    { id: "body", label: "Кузов" },
    { id: "interior", label: "Салон" },
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: "1",
      title: "Відновлення двигуна BMW 3 Series",
      category: "engine",
      beforeImage: "/placeholder-before.jpg",
      afterImage: "/placeholder-after.jpg",
      description:
        "Повний капітальний ремонт двигуна з заміною поршневої групи та головки блоку циліндрів.",
    },
    {
      id: "2",
      title: "Фарбування кузова Mercedes-Benz",
      category: "body",
      beforeImage: "/placeholder-before.jpg",
      afterImage: "/placeholder-after.jpg",
      description:
        "Повне фарбування кузова після ДТП з відновленням геометрії.",
    },
    {
      id: "3",
      title: "Реставрація салону Audi A6",
      category: "interior",
      beforeImage: "/placeholder-before.jpg",
      afterImage: "/placeholder-after.jpg",
      description:
        "Повна реставрація шкіряних сидінь та оновлення панелі приладів.",
    },
  
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const displayedImages = filteredImages.slice(0, visibleItems);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setVisibleItems(6);
  };

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 6, filteredImages.length));
  };

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedImage]);

  return (
    <Section
      id="gallery"
      variant="light"
      title="Галерея робіт"
      subtitle="Переглядайте результати наших робіт - до і після ремонту"
      className={styles.gallery}
    >
      <div className={styles.filters}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`${styles.filterButton} ${
              activeFilter === filter.id ? styles.active : ""
            }`}
            onClick={() => handleFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {displayedImages.map((image) => (
          <div
            key={image.id}
            className={styles.galleryItem}
            onClick={() => openModal(image)}
          >
            <div className={styles.imageContainer}>
              <ImgComparisonSlider className={styles.comparisonSlider}>
                <div slot="first" className={styles.beforeImage}>
                  <div className={styles.beforeLabel}>ДО</div>
                  <Image 
                    src={image.beforeImage} 
                    alt={`До: ${image.title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div slot="second" className={styles.afterImage}>
                  <div className={styles.afterLabel}>ПІСЛЯ</div>
                  <Image 
                    src={image.afterImage} 
                    alt={`Після: ${image.title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </ImgComparisonSlider>
            </div>

            <div className={styles.itemContent}>
              <div className={styles.itemCategory}>
                {filters.find((f) => f.id === image.category)?.label}
              </div>
              <h3 className={styles.itemTitle}>{image.title}</h3>
              <p className={styles.itemDescription}>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < filteredImages.length && (
        <div className={styles.loadMore}>
          <Button variant="primary" size="large" onClick={handleLoadMore}>
            Показати більше ({filteredImages.length - visibleItems} залишилось)
          </Button>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div
          className={`${styles.modal} ${selectedImage ? styles.open : ""}`}
          onClick={closeModal}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ✕
            </button>

            <div className={styles.imageContainer}>
              <ImgComparisonSlider className={styles.comparisonSlider}>
                <div slot="first" className={styles.beforeImage}>
                  <div className={styles.beforeLabel}>ДО</div>
                  <Image 
                    src={selectedImage.beforeImage} 
                    alt={`До: ${selectedImage.title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div slot="second" className={styles.afterImage}>
                  <div className={styles.afterLabel}>ПІСЛЯ</div>
                  <Image 
                    src={selectedImage.afterImage} 
                    alt={`Після: ${selectedImage.title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </ImgComparisonSlider>
            </div>

            <div className={styles.modalInfo}>
              <div className={styles.modalCategory}>
                {filters.find((f) => f.id === selectedImage.category)?.label}
              </div>
              <h3 className={styles.modalTitle}>{selectedImage.title}</h3>
              <p className={styles.modalDescription}>
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

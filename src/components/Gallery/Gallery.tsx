"use client";

import {
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';
import { ReactCompareSlider } from 'react-compare-slider';
import Button from '@/components/Button/Button';
import Section from '@/components/Section/Section';
import { GalleryImage } from '@/types';
import styles from './Gallery.module.scss';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [visibleItems, setVisibleItems] = useState(6);

  const filters = [
    { id: "all", label: "Всі роботи" },
    // { id: "painting", label: "Фарбування" },
    { id: "straightening", label: "Рихтовка" },
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: "2",
      title: "Рихтовка Škoda Octavia",
      category: "straightening",
      beforeImage: "/gallery/before2.png",
      afterImage: "/gallery/after2.png",
      description: "Рихтовка Škoda Octavia після ДТП.",
    },
    {
      id: "3",
      title: "Рихтовка BMW I4 M50",
      category: "straightening",
      beforeImage: "/gallery/before3.jpg",
      afterImage: "/gallery/after3.jpg",
      description: "Рихтовка BMW I4 M50 після ДТП.",
    },
    {
      id: "1",
      title: "Рихтовка Volkswagen Passat",
      category: "straightening",
      beforeImage: "/gallery/before1.png",
      afterImage: "/gallery/after1.jpg",
      description: "Рихтовка Volkswagen Passat після ДТП.",
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
              <div className={styles.beforeLabel}>ДО</div>
              <div className={styles.afterLabel}>ПІСЛЯ</div>
              <ReactCompareSlider
                itemOne={
                  <div className={styles.imageWrapper}>
                    <Image
                      src={image.beforeImage}
                      alt={`До: ${image.title}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                }
                itemTwo={
                  <div className={styles.imageWrapper}>
                    <Image
                      src={image.afterImage}
                      alt={`Після: ${image.title}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                }
                className={styles.comparisonSlider}
              />
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
            <button
              className={styles.closeButton}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeModal();
              }}
              type="button"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={styles.imageContainer}>
              <div className={styles.beforeLabel}>ДО</div>
              <div className={styles.afterLabel}>ПІСЛЯ</div>
              <ReactCompareSlider
                itemOne={
                  <div className={styles.imageWrapper}>
                    <Image
                      src={selectedImage.beforeImage}
                      alt={`До: ${selectedImage.title}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="90vw"
                    />
                  </div>
                }
                itemTwo={
                  <div className={styles.imageWrapper}>
                    <Image
                      src={selectedImage.afterImage}
                      alt={`Після: ${selectedImage.title}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="90vw"
                    />
                  </div>
                }
                className={styles.comparisonSlider}
              />
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

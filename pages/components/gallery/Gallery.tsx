import * as React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./gallery.module.scss";
import picture from "../../images/pierwszy-stopien-zakwasy.jpg";
import picture1 from "../../images/picture1.jpg";
import picture2 from "../../images/picture2.jpg";
import { useWindowWidth } from "../../utils/windowWidth";

const NUMBER = 8;
const DELAY = 3000;

const PHOTOS = [
  { id: 1, title: "photo1", src: "https://i.imgur.com/EB8Cm7R.jpg" },
  { id: 2, title: "photo2", src: "https://i.imgur.com/7OQmTQW.jpg" },
  { id: 3, title: "photo3", src: "https://i.imgur.com/EB8Cm7R.jpg" },
  { id: 4, title: "photo4", src: "https://i.imgur.com/7OQmTQW.jpg" },
  { id: 5, title: "photo5", src: "https://i.imgur.com/EB8Cm7R.jpg" },
  { id: 6, title: "photo6", src: "https://i.imgur.com/7OQmTQW.jpg" },
];

const Gallery = () => {
  const width = useWindowWidth();
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [numberOfPictures, setNumberOfPictures] = useState(0);

  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (width < 768) {
      setNumberOfPictures(1);
      setMaxIndex(PHOTOS.length);
    } else if (width < 1024) {
      setNumberOfPictures(2);
      setMaxIndex(PHOTOS.length - 1);
    } else {
      setNumberOfPictures(3);
      setMaxIndex(PHOTOS.length - 2);
    }
    index > maxIndex && setIndex(0);
  }, [width]);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex >= PHOTOS.length - numberOfPictures ? 0 : prevIndex + 1
        ),
      DELAY
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <section id="gallery" className={styles.gallery}>
      <h2 className={styles.gallery__title}>Galeria</h2>
      <p className={styles.gallery__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={styles.gallery__slideshow}>
        <div
          className={styles.gallery__slider}
          style={{
            transform: `translateX(${
              -index *
              ((width - 10 * (numberOfPictures - 1)) / numberOfPictures + 10)
            }px)`,
          }}
        >
          {PHOTOS.map((photo) => (
            <div
              className={styles.gallery__slide}
              key={photo.id}
              style={{
                width: (width - 10 * (numberOfPictures - 1)) / numberOfPictures,
                height: width / numberOfPictures - 5,
              }}
            >
              <img
                className={styles.gallery__slideImage}
                src={photo.src}
                alt="slide"
              />
            </div>
          ))}
        </div>
        <div className={styles.gallery__dotsContainer}>
          {Array.from(Array(PHOTOS.length - numberOfPictures + 1).keys()).map(
            (_, index1) => (
              <div
                key={index1}
                onClick={() => {
                  setIndex(index1);
                }}
                className={`${styles.gallery__dots} ${
                  index1 === index ? styles["gallery__dots--active"] : ""
                }`}
              ></div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import React, { useState, useTransition } from "react";
import CarouselItem from "./CarouselItem";
import styles from "./CarouselImages.module.scss";
import { IMAGES_PER_SILDER } from "../../assets/constants";
import leftArrow from "../../assets/images/arrow_left_icon.png";
import rightArrow from "../../assets/images/arrow_right_icon.png";

const CarouselImages = ({ resource }) => {
  const images = resource.read().photos;

  const [isPending, startTransition] = useTransition();
  const totalPages = images.length / IMAGES_PER_SILDER;

  const [currentPage, setCurrentPage] = useState(1);
  const [firstImageIndex, setFirstImageIndex] = useState(0);

  let currentSliderImages = images.slice(firstImageIndex,IMAGES_PER_SILDER + firstImageIndex);

  const nextImage = () => {
    setFirstImageIndex((prev) => firstImageIndex === images.length - IMAGES_PER_SILDER ? prev : prev + 1);
    startTransition(() => {
      if ((firstImageIndex + 1) % IMAGES_PER_SILDER === 0) {
        setCurrentPage((prevPage) => prevPage === totalPages ? prevPage : prevPage + 1);
      }
    });
  };

  const prevImage = () => {
    setFirstImageIndex((prev) => (firstImageIndex === 0 ? 0 : prev - 1));
    startTransition(() => {
      if ((firstImageIndex + 1) % IMAGES_PER_SILDER === 0) {
        setCurrentPage((prevPage) => prevPage - 1);
      }
    });
  };

  return (
    <div className={styles.carousel}>
        <div className={styles.carousel_navigation}>
            <div className={styles.carousel__arrow_width}>
                {firstImageIndex !== 0 && (
                    <img
                        src={leftArrow}
                        onClick={prevImage}
                        alt="left arrow navigation"
                        className={styles.carousel_arrow}
                    />
                )}
            </div>
     
            <span>
                {currentSliderImages.map((image) => (
                        <CarouselItem key={image.id} imageSrc={image.img_src} />
                ))} 
            </span>

            <div className={styles.carousel__arrow_width}>
                {firstImageIndex < images.length - IMAGES_PER_SILDER  && (
                    <img
                    src={rightArrow}
                    onClick={nextImage}
                    alt="right arrow navigation"
                    className={styles.carousel_arrow}
                />    
                )} 
            </div>
        </div>

        <div className={styles.carousel__page}>
            page {currentPage}/{totalPages}
        </div>
    </div>
  )

}

export default CarouselImages;

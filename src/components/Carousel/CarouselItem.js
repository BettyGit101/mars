import React from 'react';
import styles from './CarouselItem.module.scss';

function CarouselItem({imageSrc}) {
    return (
        <img src={imageSrc} className={styles.image} alt="mars"/>
    )
}

export default CarouselItem

import React, {Suspense} from 'react';
import {fetchData} from '../CallApi';
import Button from '../components/UI/Button';
import {IMAGES_URL} from '../assets/constants';
import Header from '../components/Layout/Header';
import curiosityRover from '../assets/images/curiosityRover.jpg';
import CarouselImages from '../components/Carousel/CarouselImages';
import {ABOUT_PAGE_TITLE, ABOUT_INFO, ABOUT_IMAGE_NAME, VIEW_IMAGES_BY_DATE, VIEW_WEATHER} from '../assets/constants';
import styles from './About.module.scss';

const images_resource = fetchData(IMAGES_URL);

const About = () => {
    return (
        <div className={styles.rover}>

            <Header text={ABOUT_PAGE_TITLE} isPrimaryHeader={true}/>

            <section className={styles.rover__about}>
                <div className={styles.rover__info}>
                    <img src={curiosityRover} alt="Curiosity rover" className={styles.rover__img}/>
                    <div className={styles.rover__details}>
                        <div>{ABOUT_INFO}</div>
                        <div className={styles.rover__buttons}>
                            <Button text={VIEW_IMAGES_BY_DATE} />
                            <Button text={VIEW_WEATHER} />
                        </div>
                    </div>
                </div>
               <label className={styles.rover__imgText}>{ABOUT_IMAGE_NAME}</label>
            </section>


            <section>
                <Header text="Curiosity rover images" isPrimaryHeader={false}/>
                <Header text="from today" isPrimaryHeader={false} isPrimaryColor={true}/>
                <Suspense fallback={<h3 className={styles.rover__notification}>Loading Images Please Wait...</h3>}>
                    <CarouselImages resource={images_resource} />
                </Suspense>
            </section>
           
        </div>
    )
}

export default About;

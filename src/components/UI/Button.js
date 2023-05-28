import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Button.module.scss';
import {VIEW_IMAGES_BY_DATE, VIEW_WEATHER} from '../../assets/constants';

const Button = ({text}) => {
    const navigate = useNavigate();

    const navigatePages = () => {
        if (text === VIEW_IMAGES_BY_DATE) {
            navigate('/imagesByDate');
        } 
        else if (text === VIEW_WEATHER) {
            navigate('/marsWeather');
        }     
    }

    return (
        <div>
            <button className={styles.btn} 
                    onClick={navigatePages}>
                        {text}
           </button>
        </div>
    )
}

export default Button;

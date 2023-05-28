import React from 'react';
import DataLine from '../components/UI/DataLine';
import styles from './WeatherCard.module.scss';

const WeatherCard = ({dataPoint, info}) => {

    return (
        <div className={styles.card}>
            <DataLine label="Data Point:" value={dataPoint} />
            <DataLine label="Temperature[AVG]:" value={info.AT.av} />
            <DataLine label="Wind[AVG]:" value={info.HWS.av} />
            <DataLine label="Pressure[AVG]:" value={info.PRE.av} />
            <DataLine label="First UTC:" value={info.First_UTC} />
            <DataLine label="Last UTC:" value={info.Last_UTC} />
        </div>
    )
}

export default WeatherCard

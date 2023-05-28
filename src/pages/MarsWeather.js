import React, {useState} from 'react';
import Header from '../components/Layout/Header';
import WeatherCard from '../components/WeatherCard';
import Pagination from '../components/UI/Pagination';
import weatherMock from '../assets/weather_mock.json';
import {WEATHER_PAGE_TITLE, SORT_OPTIONS} from '../assets/constants';
import styles from './MarsWeather.module.scss';

const MarsWeather = () => {

    const cardsPerPage = 9
    const [weatherData, setWeatherData] = useState(weatherMock);
    const [sortByValue, setSortByValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    
    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    const currentPaginationCards = weatherData.sol_keys.slice(firstCardIndex, lastCardIndex);


    const handleSortByChange = (event) => {
        setSortByValue(event.target.value);

        if (event.target.value === "dataPoint") {
            const sortedDataPoints = weatherData.sol_keys.sort((p1,p2) => p1>p2? 1: -1);
            setWeatherData({
                ...weatherData,
                sol_keys:sortedDataPoints
            });
        }
        else {
            const mapPointToValue = [];
            const sortedDataPoints = [];

            if (event.target.value === 'temperature') {
                weatherData.sol_keys.map(point => mapPointToValue.push([point, weatherData[point].AT.av]));
            } 
            else if (event.target.value === 'wind') {
                weatherData.sol_keys.map(point => mapPointToValue.push([point, weatherData[point].HWS.av]));

            }
            else if (event.target.value === 'pressure') {
                weatherData.sol_keys.map(point => mapPointToValue.push([point, weatherData[point].PRE.av]));
            }

            mapPointToValue.sort((e1, e2) => e1[1] > e2[1] ? 1 : -1);
            mapPointToValue.forEach(item => sortedDataPoints.push(item[0]));
            setWeatherData({
                ...weatherData,
                sol_keys:sortedDataPoints
            });
        }
    }

    
    return (
        <div className={styles.weather}>
            <div className={styles.weather__header}>
                <Header text={WEATHER_PAGE_TITLE} isPrimaryHeader={true}/>
                <div>
                    <label>Sory By:</label>
                    <select onChange={handleSortByChange} className={styles.weather__select}> 
                        <option value="Select a value">Select a value</option>
                        {SORT_OPTIONS.map(sortOption =>
                            <option key={sortOption.id} value={sortOption.value}>{sortOption.label}</option>)}
                    </select>
                </div>
            </div>

            <div className={styles.weather__dataCards}>
                {currentPaginationCards.map(point => <WeatherCard key={point} dataPoint={point} info={weatherData[point]}/>)}
            </div>
            
            <Pagination totalItems={weatherData.sol_keys.length} 
                        itemsPerPage={cardsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}/>
            
        </div>
    )
}

export default MarsWeather;

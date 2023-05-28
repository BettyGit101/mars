import axios from 'axios';
import React, {useState} from 'react';
import Header from '../components/Layout/Header';
import styles from './ImagesByDate.module.scss';
import searchIcon from '../assets/images/search_icon.png';
import {dateValidation} from '../assets/utils';
import Pagination from '../components/UI/Pagination';
import {MARS_IMAGES_BY_DATE_PAGE_TITLE} from '../assets/constants';

const ImagesByDate = () => {
    
    const imagesPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [imagesByDate, setImagesByDate] = useState(null);

    
    const onChangeDateHandler = (e) => {
        setErrorMsg('');
        setSelectedDate(e.target.value);
    }

    const searchButtonClickHandler = () => {
        const error = dateValidation(selectedDate);
        if (error.length !== 0) {
            setErrorMsg(error);
            return;
        }

        setIsLoading(true);
        const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate}&api_key=9RcHVtBeVO9nGAEGno5jrwpfK7hTjFORcJ8ZVQjR&page=1`;
        axios.get(URL)
             .then(response => response.data)
             .then((data) => {
                 setImagesByDate(data.photos)
                 setIsLoading(false);
                })
             .catch(error => {
                 setErrorMsg(`Error occurred: ${error.code}`);
                 setIsLoading(false);
                })
    }


    const displayResults = () => {
        if (isLoading) {
            return <h3 className={styles.search__notification}>Loading...</h3>  
        }
        if (imagesByDate === null) {
            return <h3 className={styles.search__notification}>Please enter a search date</h3>  
        }

        if (imagesByDate.length === 0) {
            return <h3 className={styles.search__notification}>No items were found for that date</h3>
        }

        const lastImageIndex = currentPage * imagesPerPage;
        const firstImageIndex = lastImageIndex - imagesPerPage;
        const currentPaginationImages = imagesByDate.slice(firstImageIndex, lastImageIndex);

        return (
            <div>
                <div className={styles.search__results}>
                    {currentPaginationImages.map(item => <img src={item.img_src} alt="search result" className={styles.search__filtered} key={item.id}/>)}
                </div>
                <Pagination totalItems={imagesByDate.length} 
                            itemsPerPage={imagesPerPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}/>
            </div>
        )
    }
    

    return (
        <div className={styles.search}>
            <Header text={MARS_IMAGES_BY_DATE_PAGE_TITLE} isPrimaryHeader={true}/>
            <div className={styles.search__area}>
                <span>Earth date:</span>
                <input type="text" 
                       value={selectedDate} 
                       placeholder="Please enter a date"
                       className={styles.search__input}
                       onChange={onChangeDateHandler}/>
                <button onClick={searchButtonClickHandler} className={styles.search__btn}>
                    Search 
                    <img className={styles.search__searchIcon} src={searchIcon} alt="search icon"/>
                </button>
                {errorMsg.length !== 0 && <p className={styles.search__error}>{errorMsg}</p>}  
            </div>

            {displayResults()}
        </div>
    )
}

export default ImagesByDate;

import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({totalItems, itemsPerPage, currentPage, setCurrentPage}) => {
    let pages = ["<"];

    for (let i=1; i<= Math.ceil(totalItems/itemsPerPage); i++) {
        pages.push(i);
    }

    pages.push(">");

    const paginationClickHandler = (page) => {
        if (page === '<' && currentPage >= 2) {
            setCurrentPage(currentPage-1);
        } 
        else if (page === '>' && currentPage <= pages.length-2) {
            setCurrentPage(currentPage+1);
        } else {
            setCurrentPage(page);
        }
    }

    return (
        <div className={styles.pagination}>
            {pages.map((page, index) => {
                const selectedPage = page === currentPage? 'selected':'';
                const isDisabled = (page === '<' && currentPage === 1) || (page === '>' && currentPage === pages.length-2);

                return <button key={index}
                               disabled={isDisabled}
                               onClick={() => paginationClickHandler(page)}
                               className={`${styles.pagination__btn} ${styles[selectedPage]}`}>
                                   {page}
                       </button>
            })}
        </div>
    )
}

export default Pagination

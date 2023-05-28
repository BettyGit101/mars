import React from 'react';
import styles from './DataLine.module.scss';

const DataLine = ({label, value}) => {
    return (
        <div className={styles.data}>
            <div className={styles.data__label}>{label}</div>
            <div>{value}</div>
        </div>
    )
}

export default DataLine

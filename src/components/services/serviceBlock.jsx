import React from 'react';
import styles from './services.module.scss'
import {Divider} from "@mui/material";


const ServiceBlock = ({title, price}) => {
    return (
        <div className={styles.serviceBlock}>
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>{price}</p>
        </div>
    );
};

export default ServiceBlock;
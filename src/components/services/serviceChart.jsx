import React from 'react';
import styles from './services.module.scss'
import Image from "next/image";

const ServiceChart = ({title, icon}) => {
    return (
        <div className={styles.serviceChart}>
            <div>
                <Image
                    src={icon}
                    width={100}
                    height={100}
                    alt="Picture of the icon"
                />
            </div>
                <h1>{title}</h1>
                <a href="/services">View More</a>

        </div>
    );
};

export default ServiceChart;
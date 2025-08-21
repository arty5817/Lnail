import React from 'react';
import styles from "./title.module.scss";
import Image from "next/image";

const Title = ({title}) => {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
        </div>
    );
};

export default Title;
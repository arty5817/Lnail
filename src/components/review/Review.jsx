"use client";

import React from 'react';
import styles from './review.module.scss';
import TextCarousel from "@/components/carousel/TextCarousel";
import { Rating } from "@mui/material";

const Review = () => {
    return (
        <div className={styles.reviewSection}>
            <div className={styles.container}>
                <p>TESTIMONIALS</p>
                <p>Our Customers Love What We Do</p>
                <Rating name="size-large" readOnly defaultValue={5} size="large" />
            </div>
            <div className={styles.carousel}>
                <TextCarousel />
            </div>
        </div>
    );
};

export default Review;

"use client"
import React from 'react';
import styles from './page.module.scss';


const Footer = () => {


    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* About Section */}
                <div className={styles.section}>
                    <h2 className={styles.title}>About Us</h2>
                    <p className={styles.text}>
                        At LN, our talented nail artist creates stunning designs while providing a relaxing, luxurious experience. Using high-quality products, she ensures your nails look perfect and feel healthy. Whether you want a classic manicure, a bold design, or a pampering spa treatment, she’s here to make you feel confident and beautiful.
                    </p>
                    <p className={styles.number}>+1 (747) - 389 - 42 - 23</p>
                </div>

                {/* Links Section */}
                <div className={styles.section}>
                    <h2 className={styles.title}>Quick Links</h2>
                    <ul className={styles.links}>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Map Section */}
                <div className={styles.section}>
                    <h2 className={styles.title}>Our Location</h2>
                    <div className={styles.mapWrapper}>
                        <iframe
                            title="Company Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1191.4044373567062!2d-118.41612536429889!3d34.18596733411154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2966081b993cd%3A0x99d8e9deca5126b6!2s6339%20Morse%20Ave%2C%20Valley%20Glen%2C%20CA%2091606!5e0!3m2!1sen!2sus!4v1755573028953!5m2!1sen!2sus"
                            className={styles.map}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} LN nail lounge. All rights reserved.
            </div>
        </footer>

    );
};

export default Footer;
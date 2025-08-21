import React from 'react';
import styles from './aboutpart.module.scss'

const AboutPart = () => {
    return (
        <div className={styles.about}>
            <div className={styles.content}>
                <div className={styles.imgContainer}></div>
                <div className={styles.contentText}>
                    <h1>About Us</h1>
                    <p>
                        LN was created with one simple vision: to bring beauty, art, and self-care together in one intimate space. Founded by professional nail artist Elen Yeghiazaryan, LN is more than just a salon—it’s a reflection of her journey, her artistry, and her belief that every detail matters.
                    </p>
                    <p>
                        Unlike big, crowded salons, LN was built around a more personal experience. Here, every client receives full attention, care, and artistry. From timeless classic manicures to bold, creative designs, every service is tailored to highlight individuality and confidence.
                    </p>
                    <p>
                        Quality has always been at the heart of LN. Using only premium products and professional techniques, Elen ensures that every set of nails not only looks beautiful, but also stays healthy and strong.
                    </p>
                    <p>
                        For Elen, LN is not just a business—it’s her passion brought to life. It’s the result of years of dedication, resilience, and the dream she carried from Armenia to Los Angeles.
                    </p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentText}>
                    <h1>Founder</h1>
                    <p>
                        Elen Yeghiazaryan is the founder and heart behind LN. Born and raised in Armenia, Elen always carried a deep love for beauty and art. What began as a creative passion slowly turned into a profession—one that would shape her future.
                    </p>
                    <p>
                        With over seven years of experience as a professional nail artist, Elen has dedicated herself to perfecting her craft. Her journey was not a simple one. She spent countless hours training, practicing, and mastering the fine details that turn a simple manicure into a work of art.
                    </p>
                    <p>
                        Today, Elen continues her journey not just as a skilled artist, but as a founder who built her brand from passion, resilience, and love for her clients.
                    </p>
                </div>
                <div className={styles.imgContainer}></div>
            </div>
        </div>
    );
};

export default AboutPart;
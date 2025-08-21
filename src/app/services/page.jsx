import React from 'react';
import Headpart from "@/components/headpart/Headpart";
import Title from "@/components/title/Title";
import styles from "./service.module.scss";
import ServiceBlock from "@/components/services/serviceBlock";
import {Divider} from "@mui/material";


export const metadata = {
    title: {
        default: "Services",
        template: "%s | Elen Nail Studio",
    },
    description: "Services our modern Elen Nail Studio",
    icons: {
        icon: "/logo1.png",         // standard favicon
        shortcut: "/logo1.png",     // fallback
        apple: "/logo1.png", // for iOS home screen
    },
};



const Services = () => {
    return (
        <div>
            <Headpart />
            <Title title={'Menu Services'} />
            <div className={styles.container}>

                <div className={styles.services}>
                    <div className={styles.img1}>

                    </div>
                    <h1>Manicure</h1>
                    <Divider />
                    <ServiceBlock title={'Regular Manicure'} price={'$40'} />
                    <p>Short on time? Our regular manicure includes trimming, shaping, cuticle care, a quick massage, and buff or polish. Enhance your manicure with a top coat for a longer-lasting, flawless finish..</p>
                    <ServiceBlock title={'Gel Manicure'} price={'$50'} />
                    <p>In a hurry? Enjoy a full manicure with nail trimming, shaping, cuticle care, a relaxing massage, and buff or polish. Top it off with a protective top coat or choose acrylic fixing for extra strength.</p>
                    <ServiceBlock title={'Hard Gel'} price={'$60'} />
                    <p>Experience a hard gel manicure that strengthens and shapes your nails while providing a flawless, glossy finish. Includes nail prep, shaping, cuticle care, and buffing, finished with a top coat or acrylic fixing for long-lasting results.</p>
                    <ServiceBlock title={'Gel X'} price={'$65'} />
                    <p>Gel X nails offer a lightweight, durable, and natural-looking extension. Includes nail prep, shaping, cuticle care, and application of Gel X tips with a glossy finish. Finish with a top coat or acrylic fixing for long-lasting wear.</p>
                    <ServiceBlock title={'Shiny Buff'} price={'$10'} />
                    <ServiceBlock title={'Nail Fix'} price={'$5+'} />
                </div>
                <div className={styles.services}>
                    <div className={styles.img2}>
                    </div>
                    <h1>Pedicure</h1>
                    <Divider />
                    <ServiceBlock title={'Smart Pedicure (with regular manicure)'} price={'$40'} />
                    <p className={styles.subTitle}>(With gel polish $50)</p>
                    <p>Our Smart Pedicure combines nail trimming, shaping, cuticle care, and gentle exfoliation for soft, smooth feet. Finished with a massage and polish or top coat for a refreshed, long-lasting look.</p>
                    <ServiceBlock title={'Classic Pedicure'} price={'$40'} />
                    <p>A timeless treatment that includes nail trimming, shaping, cuticle care, exfoliation, and a relaxing massage. Finish with your choice of polish or top coat for a clean, polished look.</p>
                    <ServiceBlock title={'Gel Pedicure'} price={'$50'} />
                    <p>Adds a durable, glossy gel polish to your nails for a long-lasting, chip-free finish. Includes nail prep, cuticle care, shaping, and massage for healthy, beautiful feet.</p>
                    <ServiceBlock title={'Hard Gel Pedicure'} price={'$60'} />
                    <p>Strengthens and shapes your nails with hard gel for a flawless, long-lasting finish. Includes nail prep, cuticle care, buffing, and a relaxing massage, finished with top coat or acrylic fixing.</p>
                    <ServiceBlock title={'Extra Massage (10 Mins)'} price={'$15'} />
                    <ServiceBlock title={'Toenail Fix'} price={'$5+'} />
                    <h1>Combo Manicure & Pedicure</h1>
                    <Divider />
                    <ServiceBlock title={'Signature Organic Mani-Pedi'} price={'$100'} />
                </div>
                <div className={styles.services}>
                    <div className={styles.img3}>
                    </div>
                    <h1>Nail Enhancements</h1>
                    <Divider />
                    <ServiceBlock title={'GEL-X Extension'} price={'$65'} />
                    <p className={styles.subTitle}>Add length with full-cover Soft Gel Extensions — durable, elegant, and gentle on natural nails. Choose your gel color and enjoy a dust/odor and damage-free application.</p>
                </div>
                <div className={styles.services}>
                    <div className={styles.img4}>
                    </div>
                    <h1>The Drinks</h1>
                    <Divider />
                    <ServiceBlock title={'Water'} price={'free'} />
                    <ServiceBlock title={'Hot Armenian Coffee'} price={'free'} />
                    <ServiceBlock title={'Hot Tea'} price={'free'} />
                    <ServiceBlock title={'Iced Coffee Glace (greek coffee)'} price={'free'} />



                </div>
            </div>

        </div>
    );
};

export default Services;
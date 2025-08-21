import React from 'react';
import styles from './services.module.scss'
import ServiceChart from "@/components/services/serviceChart";
import manicure from '../../../public/Icon-Nail-03.png'
import pedicure from '../../../public/Icon-Nail-04.png'
import nailart from '../../../public/Icon-Nail-01.png'
import removal from '../../../public/Icon-Nail-02.png'
import CustomButton from "@/components/CustomButton/CustomButton";



const ServicesPart = () => {
    return (
        <div className={styles.containerMain}>
            <div className={styles.container}>
                <div className={styles.main}>
                    <p>Our Services</p>
                    <h1>Where Your Nails Come First</h1>
                    <p>Our professional team is here to provide you with a calm and welcoming experience</p>
                </div>
            </div>
            <div className={styles.chartMain}>
                <ServiceChart title={'Manicure'} icon={manicure}/>
                <ServiceChart title={'Pedicure'} icon={pedicure}/>
                <ServiceChart title={'Nail Enhancement'} icon={nailart}/>
                <ServiceChart title={'Nail Art'} icon={removal}/>
                <ServiceChart title={'Removal'} icon={manicure}/>
                <ServiceChart title={'More Services'} icon={manicure}/>
            </div>
        </div>
    );
};

export default ServicesPart;
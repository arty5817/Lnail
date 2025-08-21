"use client"
import React from 'react';
import styles from './headline.module.scss';
import CustomButton from "@/components/CustomButton/CustomButton";
import { TypeAnimation } from 'react-type-animation';
import {router} from "next/client";
import Link from "next/link";

const Headline = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <p>Where Every Detail Becomes Art</p>
                <p className={styles.number}>+1 (747) - 389 - 42 - 23</p>
                <br/>
                <TypeAnimation
                    sequence={[
                        'Luxury nail art.',
                        1000,
                        'Elegant gel designs.',
                        1000,
                        'Trendy and timeless styles.',
                        1000,
                        'Your nails, your story.',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={60}
                    style={{ fontSize: '2em', display: 'inline-block', color: '#ffe5ec' }}
                    repeat={Infinity}
                    cursor={true}
                />
                <br/>
                <Link href={"../about"}>
                    <CustomButton camel >Next to see</CustomButton>
                </Link>
                {/*<button onClick(){router.push('/about')}></button>*/}
            </div>
        </div>
    );
};

export default Headline;
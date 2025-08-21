import React from 'react';
import Header from "@/components/header/Header";
import Headpart from "@/components/headpart/Headpart";
import Title from "@/components/title/Title";
import styles from "./contact.module.scss";
import {Button} from "@mui/material";
import Image from "next/image";
import CustomButton from "@/components/CustomButton/CustomButton";



export const metadata = {
    title: {
        default: "Contact Us",
        template: "%s | Elen Nail Studio",
    },
    description: "Contact Us Elen Nail Studio",
    icons: {
        icon: "/logo1.png",         // standard favicon
        shortcut: "/logo1.png",     // fallback
        apple: "/logo1.png", // for iOS home screen
    },
};

const Contact = () => {
    return (
        <div>
            <Headpart />
            <Title title={'Contact'} />
            <div className={styles.container}>
                <div className={styles.img}>
                    <Image src={'/may-manicure.jpg'} width={300} height={300} />
                </div>
                <div className={styles.textContainer}>
                    <h1>
                        Send Us Email
                    </h1>
                    <p>
                        We welcome your questions. Feel free to call, write, or email us and we’ll be happy to answer your questions.
                    </p>
                    <CustomButton camel href="mailto:78elen78@gmail.com">Email Us</CustomButton>
                    <p className={styles.number}>+1 (747) - 389 - 42 - 23</p>


                </div>
            </div>
        </div>
    );
};

export default Contact;
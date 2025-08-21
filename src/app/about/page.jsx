import React from 'react';
import Headpart from "@/components/headpart/Headpart";
import Title from "@/components/title/Title";
import AboutPart from "@/components/about/AboutPart";


export const metadata = {
    title: {
        default: "About Us",
        template: "%s | Elen Nail Studio",
    },
    description: "About Elen Yeghiazaryan Nail Studio",
    icons: {
        icon: "/logo1.png",         // standard favicon
        shortcut: "/logo1.png",     // fallback
        apple: "/logo1.png", // for iOS home screen
    },
};

const About = () => {

    return (
        <div>
            <Headpart />
            <Title title={'About'} />
            <AboutPart />
        </div>
    );
};

export default About;
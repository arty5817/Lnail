import React from 'react';
import Headpart from "@/components/headpart/Headpart";
import Title from "@/components/title/Title";
import styles from "./gallery.module.scss";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



export const metadata = {
    title: {
        default: "Gallery",
        template: "%s | Elen Nail Studio",
    },
    description: "Gallery Created by Elen Nail Studio Next JS",
    icons: {
        icon: "/logo1.png",         // standard favicon
        shortcut: "/logo1.png",     // fallback
        apple: "/logo1.png", // for iOS home screen
    },
};


const Gallery = () => {



    return (
        <div>
            <Headpart />
            <Title title={'Gallery'} />
            <div className={styles.container}>
                <Zoom>
                    <img
                        alt="gal1"
                        src="/gal1.JPG"
                        width="400"
                        height="400"
                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="gal2"
                        src="/gal2.JPG"
                        width="400"
                        height="400"

                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="Tgal3"
                        src="/gal3.JPG"
                        width="400"
                        height="400"

                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="gal4"
                        src="/gal4.JPG"
                        width="400"
                        height="400"

                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="gal5"
                        src="/g1.jpg"
                        width="400"
                        height="400"

                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="gallery6"
                        src="/g2.jpg"
                        width="400"
                        height="400"

                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="gallery6"
                        src="/img/att.kNGeeaIaGsAGQwITN1uDsyEZK39lqxHbBa26MVRYbvs.JPG"
                        width="400"
                        height="400"

                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="gallery6"
                        src="/img/att.qC2rKOzc4sbL88Ul9rmzf8v6GZWoo9QtzGpygjUvCFY.JPG"
                        width="400"
                        height="400"

                    />
                </Zoom>
                <Zoom>
                    <img
                        alt="gallery6"
                        src="/img/att.V5jJ4A1d4I2wB3N79N9fgOiPkO3DnGSqof4pwJp5M2U.JPG"
                        width="400"
                        height="400"

                    />
                </Zoom>
            </div>
        </div>
    );
};

export default Gallery;
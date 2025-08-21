"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./carousel.scss";

const Carousel = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        autoplay: true,
        mode: "free-snap",
        breakpoints: {
            '(max-width: 767px)': {
                slides: {
                    perView: 1,
                    spacing: 15,
                },
            },
        },
        slides: {
            perView: 3,
            spacing: 15,
        },
    });

    return (
        <div className="carousel">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"></div>
                <div className="keen-slider__slide number-slide2"></div>
                <div className="keen-slider__slide number-slide3"></div>
                <div className="keen-slider__slide number-slide4"></div>
                <div className="keen-slider__slide number-slide5"></div>
                <div className="keen-slider__slide number-slide6"></div>
            </div>
        </div>
    );
};

export default Carousel;

'use client'
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './carousel.scss'
import {Rating} from "@mui/material";

export default () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide text_slide1">
                        <h1>
                            Sophia Kim
                        </h1>
                        <p>
                            “Absolutely the best nail salon I’ve ever been to!”
                            Elen is a true artist. She pays attention to every detail and makes sure my nails always look perfect. The salon is clean, relaxing, and has such a luxurious vibe. I won’t go anywhere else!
                        </p>
                    </div>
                    <div className="keen-slider__slide text_slide2">
                        <h1>
                            Sophia Kim
                        </h1>

                        <p>
                            “Beautiful work and such a welcoming atmosphere.”
                            From the moment I walked in, I felt comfortable. Elen took her time to understand exactly what I wanted, and the result was flawless. She’s incredibly talented and kind — I highly recommend this place!
                        </p>
                    </div>
                    <div className="keen-slider__slide text_slide3">
                        <h1>
                            Rachel Alvarez
                        </h1>
                        <p>
                            “Nails that last and look amazing.”
                            I’ve had my nails done here several times and every single time they come out stunning. The designs are unique, and the quality is unbeatable. Plus, my nails last weeks without chipping. Elen is the best!
                        </p>
                    </div>
                    <div className="keen-slider__slide text_slide4">
                        <h1>
                            Emily Carter
                        </h1>
                        <p>
                            “Luxury experience every time.”
                            Elen Nail Lounge is my little escape. The salon feels elegant, and Elen always makes me feel pampered. Her work is not just nails — it’s true artistry. If you want gorgeous nails, this is the place!
                        </p></div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </>
    )
}

function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${
                props.left ? "arrow--left" : "arrow--right"
            } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

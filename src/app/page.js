import Headline from "@/components/headline/Headline";
import AboutPart from "@/components/about/AboutPart";
import React from "react";
import ServicesPart from "@/components/services/servicesPart";
import Carousel from "@/components/carousel/Carousel";
import Review from "@/components/review/Review";


export default function Home() {
  return (
    <>
        <Headline />
        <AboutPart />
        <ServicesPart />
        <Carousel />
        <Review/>
    </>
  );
}

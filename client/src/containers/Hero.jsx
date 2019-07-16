import React from "react";
import LazyHero from "react-lazy-hero";
import ContainerLeft from "./ContainerLeft";

export default function Hero() {
    return (
        <div>
            <LazyHero
                imageSrc="/images/lotsocups.jpg"
                color="#9a82b5"
                minHeight="100vh"
                opacity="0.6"
                isFixed="true"
                margin="0px"
                padding="0px"
                overflow="hidden"
            />
        </div>
    );
}

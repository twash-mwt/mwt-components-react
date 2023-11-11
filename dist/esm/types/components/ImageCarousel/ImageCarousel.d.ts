import React from "react";
interface CarouselItem {
    imgSrc: string;
    link: string;
    target: string;
}
interface ImageCarouselProps {
    carouselItems: CarouselItem[];
    itemsPerPage: number;
}
declare const ImageCarousel: ({ carouselItems, itemsPerPage }: ImageCarouselProps) => React.JSX.Element;
export { ImageCarousel, ImageCarouselProps };

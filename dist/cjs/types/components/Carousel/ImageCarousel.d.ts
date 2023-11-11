import React from "react";
interface CarouselItem {
    src: string;
    onClick: Function;
}
interface ImageCarouselProps {
    carouselItems: CarouselItem[];
    itemsPerPage: number;
}
declare const ImageCarousel: ({ carouselItems, itemsPerPage }: ImageCarouselProps) => React.JSX.Element;
export { ImageCarousel, ImageCarouselProps };

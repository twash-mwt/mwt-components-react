import React, { MouseEventHandler } from 'react';

declare enum ButtonKind {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary"
}
declare enum ButtonSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

interface ButtonProps {
    size?: ButtonSize;
    kind?: ButtonKind;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: (props: React.PropsWithChildren<ButtonProps>) => React.JSX.Element;

interface CarouselItem {
    src: string;
    onClick: Function;
}
interface ImageCarouselProps {
    carouselItems: CarouselItem[];
    itemsPerPage: number;
}
declare const ImageCarousel: ({ carouselItems, itemsPerPage }: ImageCarouselProps) => React.JSX.Element;

export { Button, ButtonKind, type ButtonProps, ButtonSize, ImageCarousel, type ImageCarouselProps };

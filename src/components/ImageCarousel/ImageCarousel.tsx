import React, { ReactNode, useEffect, useState } from "react"
import styles from './ImageCarousel.module.css';

enum Direction {
    FORWARD = 'forward',
    BACKWARD = 'backward'
}

interface CarouselItem {
    imgSrc: string;
    link: string;
    target: string;
    width?: number;
    height?: number;
}

interface ImageCarouselProps {
    carouselItems: CarouselItem[];
    itemsPerPage: number;
}

const DEFAULT_CAROUSEL_ITEMS: CarouselItem[] = [{ imgSrc: "", link: "", target: ""}]

const ImageCarousel = ({ carouselItems = DEFAULT_CAROUSEL_ITEMS, itemsPerPage }: ImageCarouselProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [carouselItemsInView, setCarouselItemsInView] = useState<CarouselItem[]>([]);

    useEffect(() => {
        let nodes: any = [];
        const numberOfItems = carouselItems?.length || 0;
        for(let i = 0; i < Math.min(itemsPerPage, numberOfItems); i++) {
            const index = (currentPage - 1) % numberOfItems + i;
            const item = carouselItems[index]
            if(item) {
                nodes.push(carouselItems[index])
            } else if(index >= numberOfItems) {
                nodes.push(carouselItems[index % numberOfItems])
            }
        }
        setCarouselItemsInView(nodes);
    }, [currentPage]);

    const handleClick = (direction: Direction) => {
        if(direction === Direction.BACKWARD) {
            if(currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        }
        else if (direction === Direction.FORWARD) {
            setCurrentPage(currentPage + 1);
        }
    }

    return <div className={styles.container}>
        <div className={styles.navButton} onClick={() => handleClick(Direction.BACKWARD)}>&#8672;</div>
        <div className={styles.itemsContainer}>{
            carouselItemsInView.map(({ imgSrc, link, target }: CarouselItem, index) => 
                <div key={index} className={styles.item}>
                    <a href={link} target={target}><img className={styles.image} src={imgSrc} /></a>
                </div>
            )}
        </div>
        <div className={styles.navButton} onClick={() => handleClick(Direction.FORWARD)}>&#8674;</div>
    </div>;
}

export {
    ImageCarousel,
    ImageCarouselProps
}
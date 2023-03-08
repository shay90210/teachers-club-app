import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
}
    from 'reactstrap';

const items = [
    {
        src: '/img/pexels-karolina-grabowska-5412429.jpg',
        altText: 'Slide 1',
        caption: 'I really am a bomb educator with a bomb curl pattern.',
        title: 'Tiffany R., Wisconsin',
        key: 1,
    },
    {
        src: '/img/teachBG.jpg',
        altText: 'Slide 2',
        caption: 'I have bought two hoodies and a shirt from this store. Everything is comfortable and perfect for teachers on-the-go.',
        title: 'Danielle P., New York',
        key: 2
    },
    {
        src: '/img/notebooks-pensBG.jpg',
        altText: 'Slide 3',
        caption: 'My teacher hoodie is comfortable and my third graders liked pointing at the symbols!',
        title: 'Jamie D., Wisconsin',
        key: 3
    },
];

export const HomeCarousel = ({ ...args }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img
                    src={item.src}
                    alt={item.altText}
                    className='carousel-image'
                />
                <CarouselCaption
                    captionText={item.title}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction='prev'
                directionText='Previous'
                onClickHandler={previous}
            />
            <CarouselControl
                direction='next'
                directionText='Next'
                onClickHandler={next}
            />
        </Carousel>
    );
}

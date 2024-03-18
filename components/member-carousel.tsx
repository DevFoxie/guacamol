import React from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
interface CarouselProps {
    images: string[];
}

const HomeCarousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button onClick={handlePrevImage}>
                <ChevronLeft />
            </button>
            <img src={images[currentImageIndex]} alt="Carousel Image" className="carousel-image rounded-md" />
            <button onClick={handleNextImage}>
                <ChevronRight />
            </button>
        </div>
    );
};

export default HomeCarousel;
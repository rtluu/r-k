import React from "react";
import ImageGallery from 'react-image-gallery';
import './carousel.css'

export default function Carousel() {

    const images = [
        {
            original: 'https://i.imgur.com/C7Ys715.png',
            thumbnail: 'https://i.imgur.com/C7Ys715.png',
        },
        {
            original: 'https://i.imgur.com/9hGaKKk.jpg',
            thumbnail: 'https://i.imgur.com/9hGaKKk.jpg',
        },
        {
            original: 'https://i.imgur.com/GlQg61R.jpg',
            thumbnail: 'https://i.imgur.com/GlQg61R.jpg',
        },
        {
            original: 'https://i.imgur.com/Dcc1CoO.jpg',
            thumbnail: 'https://i.imgur.com/Dcc1CoO.jpg',
        },
        {
            original: 'https://i.imgur.com/wis8G3K.jpg',
            thumbnail: 'https://i.imgur.com/wis8G3K.jpg',
        },
        {
            original: 'https://i.imgur.com/dLJEE0O.jpg',
            thumbnail: 'https://i.imgur.com/dLJEE0O.jpg',
        },
        {
            original: 'https://i.imgur.com/na89bFT.jpg',
            thumbnail: 'https://i.imgur.com/na89bFT.jpg',
        },
    ];

    return (
        <ImageGallery items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            slideDuration={450}
            slideInterval={2000}
            infinite={true}
        />
    );

}


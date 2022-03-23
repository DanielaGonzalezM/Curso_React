import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGift();

    }, []);

    const getGift = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=oTpE7pUi096Wk6SzAQ7RuNVW77TJ0gmK&q=cat&limit=10';
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url  //? solo busca la inf si existe images
            }
        });
        setImages(gifs);
    };

    return (
        <div>
            <h3>{category}</h3>

            {images.map((img) => (
                <GifGridItem
                    key={img.id}
                    {...img} />
            ))}

        </div>
    )
}

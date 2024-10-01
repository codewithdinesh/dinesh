"use client";
import React, { useState, useEffect } from 'react';
import { ColumnsPhotoAlbum, MasonryPhotoAlbum, RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/columns.css";
import "react-photo-album/rows.css";
import { GallaryData } from '@/config/gallary';
import { AiOutlineLoading } from 'react-icons/ai';

const GallarySection = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    const handlePhotoClick = (index: number) => {
        setLightboxIndex(index);
    };


    useEffect(() => {
        const allImages = GallaryData.map(photo => new Image().src = photo.src);
        Promise.all(allImages).then(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-6 text-center" id='gallary'>Gallery</h2>

            {loading ? (


                <div className="flex flex-col justify-center items-center h-96">
                    <AiOutlineLoading className="text-4xl text-blue-500 animate-spin mb-4" />
                    <div className="relative w-full max-w-xs m-2">

                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 animate-blink ">
                            Loading images...
                        </div>
                    </div>
                </div>

            ) : (
                <ColumnsPhotoAlbum
                    photos={GallaryData}
                    columns={3}
                    padding={5}
                    onClick={({ index }) => handlePhotoClick(index)} // Use index instead of photo
                />
            )}

            {lightboxIndex !== null && (
                <Lightbox
                    open={lightboxIndex !== null}
                    close={() => setLightboxIndex(null)}
                    slides={GallaryData} // Pass all photos to the Lightbox
                    carousel={{ finite: true }}
                    index={lightboxIndex} // Set the initial image to the clicked one
                    styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
                    controller={{ closeOnBackdropClick: true, closeOnPullUp: true, closeOnPullDown: true }}
                />
            )}
        </div>
    );
};

export default GallarySection;

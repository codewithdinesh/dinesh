"use client"
import React, { useState } from 'react';
import { ColumnsPhotoAlbum, MasonryPhotoAlbum, RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/columns.css";
import "react-photo-album/rows.css";
import { GallaryData } from '@/config/gallary';

const GallarySection = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null); // Track the index of the clicked photo

    const handlePhotoClick = (index: number) => {
        setLightboxIndex(index); // Set the index of the clicked photo
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Gallery</h2>

            <ColumnsPhotoAlbum
                photos={GallaryData}
                columns={3}
                padding={5}
                onClick={({ index }) => handlePhotoClick(index)} // Use index instead of photo
            />

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

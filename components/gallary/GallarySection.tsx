"use client"
import React, { useState } from 'react';
import { ColumnsPhotoAlbum, MasonryPhotoAlbum, RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/columns.css";
import "react-photo-album/rows.css";
import { GallaryData } from '@/config/gallary';

const GallarySection = () => {

    const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);




    const handlePhotoClick = (photo: Photo) => {
        setLightboxPhoto(photo);
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Gallery</h2>
            {/* <MasonryPhotoAlbum
                photos={photos}
                columns={3}
                padding={10}
                onClick={({ photo }) => handlePhotoClick(photo)}

            />
 */}

            {/* <RowsPhotoAlbum
                photos={photos}
                padding={10}
                onClick={({ photo }) => handlePhotoClick(photo)}
            /> */}

            <ColumnsPhotoAlbum
                photos={GallaryData}
                columns={3}
                padding={10}
                onClick={({ photo }) => handlePhotoClick(photo)}
            />

            {lightboxPhoto && (
                <Lightbox
                    open={Boolean(lightboxPhoto)}
                    close={() => setLightboxPhoto(null)}
                    slides={[lightboxPhoto]} // Display the clicked photo in Lightbox
                    carousel={{ finite: true }}

                    styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
                    controller={{ closeOnBackdropClick: true, closeOnPullUp: true, closeOnPullDown: true }}
                />
            )}
        </div>
    );
};

export default GallarySection;

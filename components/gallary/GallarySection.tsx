"use client"
import React, { useState } from 'react';
import { ColumnsPhotoAlbum, MasonryPhotoAlbum, RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/columns.css";
import "react-photo-album/rows.css";

const GallarySection = () => {
    interface Photo {
        src: string;
        title: string;
        width: number;
        height: number;
    }

    const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

    const photos = [
        {
            src: "/images/me_while_coding_in_group.png",
            title: "Me while coding in group",
            width: 400, height: 250
        },
        {
            src: "/images/hackkosice_goodies.jpeg",
            title: "Hackkosice goodies",
            width: 300, height: 400
        },
        {
            src: "/images/SIH_2023.jpg",
            title: "SIH 2023",
            width: 400, height: 300
        },
        {
            src: "/images/Coding_Hackathon_with_coffe.jpg",
            title: "Coding Hackathon with coffee",
            width: 300, height: 400
        },
        {
            src: '/images/gdsc_1.jpg',
            title: 'GDSC',
            width: 300, height: 200
        },
        {
            src: "/images/hackkosice_group_2.jpeg",
            title: "Hackkosice group ",
            width: 300, height: 200
        },
        {
            src: "/images/aesa.jpg",
            title: "aesa",
            width: 340, height: 250
        },
        {
            src: "/images/hackkosice.jpeg",
            title: "Hackkosice",
            width: 300, height: 200
        },
        {
            src: "/images/sih_2023_winner.jpeg",
            title: "SIH 2023 Winner",
            width: 350, height: 200
        },

    ];

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
                photos={photos}
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

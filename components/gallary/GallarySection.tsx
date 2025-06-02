"use client";

import React, { useState, useEffect, useCallback } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "react-photo-album/masonry.css";
import { motion } from "framer-motion";
import { AiOutlineLoading } from "react-icons/ai";

import { GallaryData } from "@/config/gallary";
import { ScrollAnimation, ScrollReveal } from "@/components/ScrollAnimation";

const GallarySection = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    const handlePhotoClick = useCallback((index: number) => {
        setLightboxIndex(index);
    }, []);

    useEffect(() => {
        const allImages = GallaryData.map((photo) => {
            const img = new Image();

            img.src = photo.src;

            return img;
        });

        Promise.all(
            allImages.map((img: HTMLImageElement) => {
                return new Promise((resolve) => {
                    if (img.complete) resolve(null);
                    else img.onload = () => resolve(null);
                });
            }),
        ).then(() => {
            setLoading(false);
        });
    }, []);

    const renderGallery = () => {
        if (loading) {
            return (
                <motion.div
                    animate={{ opacity: 1 }}
                    className="flex h-96 flex-col items-center justify-center"
                    id="gallery"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <AiOutlineLoading className="mb-4 animate-spin text-4xl text-green-500" />
                    <div className="relative m-2 w-full max-w-xs">
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            className="absolute -top-6 left-1/2 -translate-x-1/2 transform"
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Loading images...
                        </motion.div>
                    </div>
                </motion.div>
            );
        }

        return (
            <ScrollReveal>
                <PhotoAlbum
                    columns={(containerWidth) => {
                        if (containerWidth < 768) return 1;
                        if (containerWidth < 1024) return 2;

                        return 4;
                    }}
                    layout="masonry"
                    photos={GallaryData}
                    spacing={8}
                    onClick={({ index }) => handlePhotoClick(index)}
                />
            </ScrollReveal>
        );
    };

    return (
        <motion.div
            animate={{ opacity: 1 }}
            className="container relative mx-auto overflow-hidden px-4 py-16"
            id="gallery"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ScrollAnimation direction="up">
                <h2 className="mb-6 text-center text-3xl font-bold text-white">
                    Gallery
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-center text-gray-300">
                    A collection of visual stories from my creative journey and
                    experiences in the digital world.
                </p>
            </ScrollAnimation>

            <ScrollAnimation className="mb-8" direction="left">
                {renderGallery()}
            </ScrollAnimation>

            {lightboxIndex !== null && (
                <Lightbox
                    captions={{ descriptionTextAlign: "center" }}
                    carousel={{ finite: true }}
                    close={() => setLightboxIndex(null)}
                    controller={{
                        closeOnBackdropClick: true,
                        closeOnPullDown: true,
                        closeOnPullUp: true,
                    }}
                    index={lightboxIndex}
                    open={lightboxIndex !== null}
                    plugins={[Zoom, Captions]}
                    slides={GallaryData.map((slide) => ({
                        ...slide,
                        title: slide.title || "",
                        description: "",
                    }))}
                    styles={{
                        root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .9)" },
                        captionsDescription: { fontSize: "16px" },
                        captionsTitle: { fontSize: "18px", fontWeight: "bold" },
                    }}
                    zoom={{ maxZoomPixelRatio: 3 }}
                />
            )}
        </motion.div>
    );
};

export default GallarySection;

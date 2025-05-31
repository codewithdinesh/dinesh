"use client";

import React, { useState } from "react";

interface ImageWithLoadingProps {
    src: string;
    alt: string;
    className?: string;
    onClick?: () => void;
}

const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({
    src,
    alt,
    className = "",
    onClick,
}) => {
    const [isLoading, setIsLoading] = useState(true);

    // Render image with or without button wrapper based on onClick presence
    const renderImage = () => {
        const imgElement = (<img
            alt={alt}
            className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
            src={src}
            style={{ objectFit: "contain" }}
            onLoad={() => setIsLoading(false)}
        />
        );

        // If onClick is provided, wrap image in a button for accessibility
        if (onClick) {
            return (<button
                type="button"
                className="w-full h-full p-0 border-0 bg-transparent"
                aria-label={`View ${alt}`}
                onClick={onClick}
            >
                {imgElement}
            </button>
            );
        }

        // Return just the image if no onClick handler
        return imgElement;
    };

    return (
        <div className="relative w-full h-full min-h-[300px]">
            {/* Image */}
            {renderImage()}

            {/* Loading Placeholder */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-100">
                    <div className="animate-pulse flex space-x-4">
                        <div className="w-12 h-12 rounded-full bg-slate-200" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageWithLoading;

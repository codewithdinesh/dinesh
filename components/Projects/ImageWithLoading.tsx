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

    return (
        <div className="relative w-full h-full min-h-[300px]">
            {/* Image */}
            <img
                alt={alt}
                className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                onClick={onClick}
                onLoad={() => setIsLoading(false)}
                src={src}
                style={{ objectFit: "contain" }}
            />

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

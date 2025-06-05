"use client";

import React from "react";
import { Photo } from "react-photo-album";
import { motion } from "framer-motion";

import { useHover } from "@/hooks/useHover";

interface ImageCardProps {
  photo: Photo;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, onClick }) => {
  const [ref, isHovered] = useHover();

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-lg cursor-pointer"
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      <motion.img
        alt={photo.alt || "Gallery image"}
        animate={{ filter: isHovered ? "brightness(1.1)" : "brightness(0.9)" }}
        className="w-full h-full object-cover rounded-lg"
        height={photo.height}
        initial={{ filter: "brightness(0.9)" }}
        src={photo.src}
        transition={{ duration: 0.3 }}
        width={photo.width}
      />

      {/* Overlay effect on hover */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {photo.alt && (
          <motion.p
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            className="text-white text-sm font-medium"
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {photo.alt}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ImageCard;

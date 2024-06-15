import React from 'react';

interface ImageGalleryProps {
  images: string[];
  onImageClick: (index: number) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4 py-4 z-10">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index}`}
          onClick={() => onImageClick(index)}
          className="cursor-pointer object-cover w-full h-48 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
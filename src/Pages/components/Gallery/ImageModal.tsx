import { XMarkIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useSwipeable } from 'react-swipeable';

interface ImageModalProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, selectedIndex, onClose, onNext, onPrev }) => {
  const handlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
    trackMouse: true,
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div 
        className="relative bg-white p-4 rounded-md shadow-lg" 
        onClick={(e) => e.stopPropagation()}
        {...handlers}
        >
        <XMarkIcon className="absolute top-5 right-5 h-6 w-6 bg-white rounded-full" onClick={onClose} />
        <ArrowLeftIcon className="absolute left-2 h-8 w-8 top-1/2 transform -translate-y-1/2 text-white bg-gray-500 bg-opacity-75 rounded-full p-2" onClick={onPrev} />
        <img src={images[selectedIndex]} alt={`Image ${selectedIndex}`} className="max-w-full max-h-[80vh] rounded-md" />
        <ArrowRightIcon className="absolute right-2 h-8 w-8 top-1/2 transform -translate-y-1/2 text-white bg-gray-500 bg-opacity-75 rounded-full p-2" onClick={onNext} />
      </div>
    </div>
  );
};

export default ImageModal;
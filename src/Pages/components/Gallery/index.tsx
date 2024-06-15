import { useState } from "react";
import ImageGallery from "./ImageGallery";
import ImageModal from "./ImageModal";

const Gallery: React.FC = () => {
    
  const images = [
    "../../../src/assets/image2.jpeg",
    "../../../src/assets/image3.jpeg",
    "../../../src/assets/image4.jpeg",
    "../../../src/assets/image5.jpeg",
    "../../../src/assets/image6.jpeg",
    "../../../src/assets/image7.jpeg",
    "../../../src/assets/image8.jpeg",
    "../../../src/assets/image9.jpeg",
    "../../../src/assets/image10.jpeg",
    "../../../src/assets/image11.jpeg",
    "../../../src/assets/image12.jpeg",
    "../../../src/assets/image13.jpeg",
    "../../../src/assets/image14.jpeg",
    "../../../src/assets/image15.jpeg",
    "../../../src/assets/image16.jpeg",
    "../../../src/assets/image17.jpeg"
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % images.length);
    }
  };

  const showPrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <ImageGallery images={images} onImageClick={openModal} />
      {selectedImageIndex !== null && (
        <ImageModal
          images={images}
          selectedIndex={selectedImageIndex}
          onClose={closeModal}
          onNext={showNextImage}
          onPrev={showPrevImage}
        />
      )}
    </div>
  );
};

export default Gallery;
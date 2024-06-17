import { useState } from "react";
import ImageGallery from "./ImageGallery";
import ImageModal from "./ImageModal";
import image0 from "/src/assets/image0.jpeg";
import image1 from "/src/assets/image1.jpeg";
import image2 from "/src/assets/image2.jpeg";
import image3 from "/src/assets/image3.jpeg";
import image4 from "/src/assets/image4.jpeg";
import image5 from "/src/assets/image5.jpeg";
import image6 from "/src/assets/image6.jpeg";
import image7 from "/src/assets/image7.jpeg";
import image8 from "/src/assets/image8.jpeg";
import image9 from "/src/assets/image9.jpeg";
import image10 from "/src/assets/image10.jpeg";
import image11 from "/src/assets/image11.jpeg";
import image12 from "/src/assets/image12.jpeg";
import image13 from "/src/assets/image13.jpeg";
import image14 from "/src/assets/image14.jpeg";
import image15 from "/src/assets/image15.jpeg";
import image16 from "/src/assets/image16.jpeg";
import image17 from "/src/assets/image17.jpeg";

const Gallery: React.FC = () => {
    
  const images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17
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
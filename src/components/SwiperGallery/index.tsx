import { ReactElement } from 'react';
import './index.scss';

interface ISwiperGalleryProps {
  images: {
    url: string;
    description: string;
  }[];
}

const SwiperGallery = ({ images }: ISwiperGalleryProps): ReactElement => {
  return (
    <div className="gallery">
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className="gallery-container-item">
            <img src={image.url} alt={image.description} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwiperGallery;

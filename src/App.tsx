import SwiperGallery from './components/SwiperGallery';

function App() {
  const images = [
    { url: '/images/1.jpg', description: 'photo 1' },
    { url: '/images/2.jpg', description: 'photo 2' },
    { url: '/images/3.jpg', description: 'photo 3' },
    { url: '/images/4.jpg', description: 'photo 4' },
    { url: '/images/5.jpg', description: 'photo 5' },
    { url: '/images/6.jpg', description: 'photo 6' },
    { url: '/images/7.jpg', description: 'photo 7' },
  ];

  return (
    <div className="container">
      <h1>Gallery</h1>
      <SwiperGallery images={images} />
    </div>
  );
}

export default App;

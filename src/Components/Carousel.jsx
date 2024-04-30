import { useState, useEffect, useCallback } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "INDIA",
      topic: "Holi",
      description:
        "Holi has been celebrated in the Indian subcontinent for centuries...",
      image:
        "https://www.shutterstock.com/image-photo/huge-stage-wedding-ceremony-beautiful-260nw-1390698410.jpg",
    },
    {
      title: "INDIA",
      topic: "Holi",
      description:
        "Holi has been celebrated in the Indian subcontinent for centuries...",
      image:
        "https://www.shutterstock.com/image-photo/huge-stage-wedding-ceremony-beautiful-260nw-1390698410.jpg",
    },
    {
      title: "INDIA",
      topic: "Holi",
      description:
        "Holi has been celebrated in the Indian subcontinent for centuries...",
      image:
        "https://www.shutterstock.com/image-photo/huge-stage-wedding-ceremony-beautiful-260nw-1390698410.jpg",
    },
    // Add more slides here
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="carousel relative">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-content">
              <h2 className="carousel-title">{slide.title}</h2>
              <p className="carousel-topic">{slide.topic}</p>
              <p className="carousel-description">{slide.description}</p>
              <div className="carousel-buttons">
                <button className="button">SEE MORE</button>
                <button className="button">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
